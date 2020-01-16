---
title: Class
date: 2020-01-13 19:11:23
tags: js
---
***ES6 类Class***
ES6定义类
```
class Person{
   constructor(name,age){
   this.name=name;
   this.age=age;
   }
   sayHi(){
     console.log("es6 say hi");
   }
}
let p=new Person("张三",18);
console.log(p);
p.sayHi();
```

ES3写法
```
function Person(name,age){
   this.name=name;
   this.age=age;
}
Person.prototype.sayHi=function(){
console.log("es3 say Hi");
}
let p=new Person("张三",18);
console.log(p);
p.sayHi();
```
定义类的静态方法和静态属性
```
class Pointer(){
 static showDefault(){
    console.log("静态方法");
 }
 showDefault(){
    console.log("实例方法");
 }
}
Pointer.attr=[0,1];
let p=new Pointer();
p.showDefault();//实例方法
Pointer.showDefault();//静态方法
console.log(Pointer.attr);
```
继承的使用
```
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log("es6 say hi");
    }
}
class Superman extends Person{
    constructor(name,age,power){
        super(name,age);
        super.sayHi();//子类初始化时便执行此方法
        this.power=power;
    }
    usePower(){
        console.log(`show me the ${this.power}`);
    }
}
let sm=new SuperMan("李四",19,"dance");//es6 say hi
sm.sayHi();//es6 say hi
sm.usePower();//show me the dance
```


