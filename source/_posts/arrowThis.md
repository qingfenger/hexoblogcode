---
title: arrowThis
date: 2020-06-28 16:32:17
tags: js
---
***箭头函数和普通函数this指向的实例理解***
一般理解：

箭头函数：
```
箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this就继承了定义函数的对象。　
普通函数：
```
```
this对象是在运行时基于函数的执行环境绑定的：在全局函数中，this指向的是window；当函数被作为某个对象的方法调用时，this就等于那个对象<br><br>
网上找的定义都很难理解。而下面的定义理解起来非常简单。
```
核心：箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。
***实例函数***
```
var a = 20;
var obj = {
    a: 10,
    b: function() {
        console.log(this.a);
    },
    b1:this.a,
    c:{
        a:50,
        fn:function(){
            console.log(this.a);
        }
    },
    d: () => {
        console.log(this.a);
    },

    e: function() {
        return () => {
            console.log(this.a);
        }
    },

}
obj.b();//10  //一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。this 指向 obj
console.log(obj.b1);//20  this指向的就是上一级的对象。this指向window
obj.c.fn();//50   一个函数中有this，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象c。区分下面的方法
var f=obj.c.fn;
f();//20   this永远指向的是最后调用它的对象 虽然函数fn是被对象c所引用，但是在将fn赋值给变量f的时候并没有执行所以最终指向的是window
obj.d();//20  箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。 this 指向window
obj.e()();//10  this指向obj 。如果有多级箭头函数嵌套()=> () => () => this.a this指向第一个箭头函数的上一级对象。
```
总结：箭头函数没有自己的this，箭头函数中用this和普通语句中的this没什么区别，所以，你知道非箭头函数下怎么用this,就知道箭头函数下怎么用this。
关于 “箭头函数对this固定化，箭头函数中的this绑定定义时所在的作用域，箭头函数不能通过 call() 或 apply() 方法绑定this” 等描述，都源于箭头函数没有自己的this。



例外：当this遇到retrun，如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数
```
function fn()
{
    this.user = '二狗子';
    return {};
}
var a = new fn;
console.log(a.user); //undefined
```
```
function fn()
{
    this.user = '二狗子';
    return 1;
}
var a = new fn;
console.log(a.user); //二狗子
```
