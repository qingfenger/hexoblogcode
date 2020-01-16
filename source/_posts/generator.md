---
title: generator
date: 2020-01-16 10:38:52
tags: js
---
生成器
```
class Person{
 * gen(){
   yield [1,2];
    yield [3,4];
     yield [5,6];
      yield [7,8];
 }
}
let p=new Person();
console.log(...p.gen());
```
函数名可以是变量
```
let name="foo";
class Person{
 [name](){
   console.log("hehe");
 }
}
let p=new Person();
p.foo();//hehe
```
---
如何创建和使用生成器
```
let list=function * (){
  yield 0;
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
let gen=list();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```
```
es3
let inc=function(value){
 return value1+1;
}
console.log(inc(1));
es6
//很重要的知识点，next的参数会变为上一次yield的返回值
let inc=function * (value){
  return (yield value+1);
}
let gen=inc(10);
console.log(gen.next());//{value: 11, done: false}
console.log(gen.next(123));//{value: 123, done: false}
console.log(gen.next(1234));//{value: undefined, done: false}
```
for...of循环
```
let list=function *(){
 yield 0;
 yield 1;
 yield 2;
 yield 3;
};
for(let p of list()){
   console.log(p);
}
for(let v of [0,1,2,3,4]){
  console.log(v);
}
```
生成器函数嵌套生成器函数;
```
let list=function *(){
   yield 0;
   yield 1;
   yield * numbers();
   yield 3;
}
let numbers=function *(){
  yield 2;
  yield 3;
}
for(let p of list()){
 console.log(p);//0,1,2,3,3
}
```
生成器的例子
```
 class Tree{
   constructor(value,children=[]){
     this.value=value;
     this.children=children;
   }
   * print(){
      yield this.value;
      for(let child of this.children){
       yield * child.print();
      }
   }
 }
 let tree=new Tree(0,[
   new Tree(1,[new Tree(2)]),
   new Tree(3)
 ]);
 for(let t of tree.print()){
    console.log(t);//0,1,2,3
 }
```
