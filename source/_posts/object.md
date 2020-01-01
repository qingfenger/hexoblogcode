---
title: object
date: 2019-12-26 09:37:32
tags: js
---
**遍历对象**
其实for..in操作的主要目的就是遍历对象的属性，如果只需要获取对象的实例属性，可以使用hasOwnProperty()进行过滤。
```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  return this.name;
}

// 实例化
var jenemy = new Person('jenemy', 25);

for (var prop in Person) {
  console.log(prop); // name age getName
}

var hasOwn = Object.prototype.hasOwnProperty;
for (var prop2 in jenemy) {
  if (hasOwn.call(jenemy, prop2)) {
    console.log(prop2); // name age
  }
}
```
**Object.keys()**
Object.keys()用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回一个由属性名组成的数组。注意它同for..in一样不能保证属性按对象原来的顺序输出。
```
// 遍历数组
var colors = ['red', 'green', 'blue'];
colors.length = 10;
colors.push('yellow');
Array.prototype.demo = function () {};

Object.keys(colors); // 0 1 2 10

// 遍历对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.demo = function() {};

var jenemy = new Person('jenemy', 25);

Object.keys(jenemy); // name age
```

**Object.getOwnPropertyNames()**
Object.getOwnPropertyNames()方法返回对象的所有自身属性的属性名（包括不可枚举的属性）组成的数组，但不会获取原型链上的属性。
```
function A(a,aa) {
  this.a = a;
  this.aa = aa;
  this.getA = function() {
    return this.a;
  }
}
// 原型方法
A.prototype.aaa = function () {};

var B = new A('b', 'bb');
B.myMethodA = function() {};
// 不可枚举方法
Object.defineProperty(B, 'myMethodB', {
  enumerable: false,
  value: function() {}
});

Object.getOwnPropertyNames(B); // ["a", "aa", "getA", "myMethodA", "myMethodB"]
```
**补充for..of**
for..of为ES6新增的方法，主要来遍历可迭代的对象（包括Array, Map, Set, arguments等），它主要用来获取对象的属性值，而for..in主要获取对象的属性名。
```
var colors = ['red', 'green', 'blue'];
colors.length = 5;
colors.push('yellow');

for (var i in colors) {
  console.log(colors[i]); // red green blue yellow
}

for (var j of colors) {
  console.log(j); // red green blue undefined undefined yellow
}
```

可以看到使用for..of可以输出包括数组中不存在的值在内的所有值。
其实除了使用for..of直接获取属性值外，我们也可以利用Array.prototype.forEach()来达到同样的目的。
```
var colors = ['red', 'green', 'blue'];
colors.foo = 'hello';

Object.keys(colors).forEach(function(elem, index) {
  console.log(colors[elem]); // red green blue hello
  console.log(colors[index]); // red green blue undefined
});

colors.forEach(function(elem, index) {
  console.log(elem); // red green blue
  console.log(index); // 0 1 2
})
```
**总结**
其实这几个方法之间的差异主要在属性是否可可枚举，是来自原型，还是实例。
|---------------------------|:----------:|:-----------------------------------:|
| 方法	                    | 适用范围    |	描述|
| for..in	                | 数组，对象  |	获取可枚举的实例和原型属性名|
| Object.keys()	            | 数组，对象  |	返回可枚举的实例属性名组成的数组|
| Object.getPropertyNames()  | 数组，对象  |	返回除原型属性以外的所有属性（包括不可枚举的属性）名组成的数组|
| for..of                    | 可迭代对象(Array, Map, Set, arguments等) | 返回属性值|

参考： [博客](https://www.cnblogs.com/wujie520303/p/4931384.html)
