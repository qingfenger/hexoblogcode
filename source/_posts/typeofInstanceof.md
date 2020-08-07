---
title: typeof与instanceof的异同?
date: 2017-09-03 20:33:39
tags:js
---

typeof用于检测数据类型,不必细说,只归纳一下易混淆的概念.
1.对于对象、数组、null 返回的值是 object 。比如typeof(window)，typeof(document)，typeof(null)返回的值都是object。
2.对于函数类型，返回的值是 function。比如：typeof(eval)，typeof(Date)返回的值都是function。
```bash
 // var a = null;
 // alert(typeof(a))
 //  alert(typeof(Date));            // function(Date使用前需要实例化的原因)
 //  alert(typeof(null));            // object
 //  alert(typeof(undefined))        // undefined
 //  alert(typeof(NaN))              // number
 //  alert(typeof(NaN == undefined)) // boolean
 //  alert(typeof(NaN == NaN))       // boolean
 //  var str = '123abc'
 //  alert(typeof(str++))            // number
 //  alert(str)                      // NaN
```

比较typeof与instanceof
相同点：
JavaScript 中 typeof 和 instanceof 常用来判断一个变量是否为空， 或者是什么类型的。

不同点:
typeof:
1.返回值是一个字符串， 用来说明变量的数据类型。
2.typeof 一般只能返回如下几个结果： number, boolean, string, function, object, undefined。

```bash
if (typeof a != "undefined") {
   console.log("ok");

 } eles {
    console.log("not ok");
}
//下面的代码是错误的
// if (a) //因为如果 a 不存在（ 未声明） 则会出错。
// if (a) {
//     console.log("ok");

// } else {
//     console.log('cc');

// }
```
***对于 Array, Null 等特殊对象使用 typeof 一律返回 object， 这正是 typeof 的局限性***
instanceof:
1.返回值为布尔值;
2. instanceof 用于判断一个变量是否属于某个对象的实例。

```bash
// var a = new Array();
// alert(a instanceof Array); // true
// alert(a instanceof Object) // true
//如上， 会返回 true， 同时 alert(a instanceof Object) 也会返回 true;
// 这是因为 Array 是 object 的子类。
// alert(b instanceof Array) // b is not defined

// function Test() {};
// var a = new test();
// alert(a instanceof test) // true
```

