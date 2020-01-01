---
title: object attributes
date: 2019-12-29 12:18:07
tags: js
---
**Object 属性**
Object.prototype 属性表示Object的原型对象
writable：false    enumberable:false  configurable:false

Object.prototype.constructor 特定函数，用于创建一个对象的原型。
Object.prototype.__proto__ 指向当对象被实例化的时候，用作原型的对象。
Object.prototype.hasOwnProperty() 返回一个布尔值，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。
Object.prototype.isPrototyeOf() 返回一个布尔值，表示指定的对象是否在本对象的原型链中。
Object.prototype.propertyIsEnumberable() 判断指定属性是否可枚举
Object.prototype.toString() 返回对象的字符串表示
Object.prototype.valueOf() 返回指定对象的原始值
由于 JavaScript 并不完全具有子类对象, 所以原型是一种有用的变通方法, 可以使用某些函数的 "基类" 对象来充当对象。例如:
```
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);

var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
```

**Object 方法**
Object.assign(target, ...sources) 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
```
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();//"My name is Matthew. Am I human? true"
person.printIntroduction()//"My name is undefined. Am I human? false"
```
Object.defineProperties(obj, props) 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
props默认值configurable:false，enumerable：false，value：undefined，writable：false，get：undefined,set:undefined;

--------------
apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
```
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);// expected output: 7
const min = Math.min.apply(null, numbers);
console.log(min);// expected output: 2
```
bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
```
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}
const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```
call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
```
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```
注意：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
