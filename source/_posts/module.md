---
title: module
date: 2020-01-16 20:39:17
tags: js
---
***ES6(Module模块化）***
模块化
ES6的模块化的基本规则或特点：
1：每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；
2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
3：模块内部的变量或者函数可以通过export导出；
4：一个模块可以导入别的模块


```
***导出***
export let A=123;
export function test(){
   console.log('test');
}
export class Hello{
   test(){ console.log('class');}
}
***导入***
import {A，test，hello} from './class/lesson17';
console.log(A,test,Hello);
***结果***
123
function test(){
   console.log('test');
}
function Hello(){
 _classCallCheck(this.Hello);
}
```
只取需要的
```
import {A} from './class/lesson17';
console.log(A):
```
到处数目太多时（无需一一对应）
```
import * as lesson from './class/lesson17';
console.log(lesson.A,lesson.test);
```
\*代表全部，as代表别名
***推荐写法***
```
let A=123;
let test=function(){
   console.log('test');
}
class Hello{
  test(){
  console.log("class");
  }
}
export default{
    A,
    test,
    Hello
}
import Lesson17 from './class/lesson17';
console.log(Lesson17.A);
好处：1.不会因为误操作将一些无关变量导出 2.通过 export default，由第三方引用时无需知道其名称，较为简洁
```
***总结导入命名***
```
import defaultcomponent,{a,b,c} from 'XXX';
eg: import React,{Component} from 'react';
导入'react' 文件里export的一个默认的组件，将其命名为React以及Component 这个非默认组件
import defaultcomponent from 'XXX'
导入XXX文件中的默认组件，命名为defaultcomponent
import {a} from 'XXX'
导入XXX文件中的a组件
import {a as b} from XXX'
导入XXX文件中的a组件，并将其重命名为b
import * as a from 'XXX'
导入XXX文件中的所有组件，并将其命名为a,调用具体组建的方式为a.b、a.c。。。但不包含默认组件
```
