/**
 * Created by admin on 2020/1/13.
 */

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
        super.sayHi();
        this.power=power;
    }
    usePower(){
        console.log("show me the ${this.power}");
    }
}
let sm=new SuperMan("李四",19,"dance");
sm.sayHi();
sm.usePower();
