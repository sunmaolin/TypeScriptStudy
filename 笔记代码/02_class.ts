/**
 * 类 使用class关键字来定义
 */

class Person {

    // 普通属性（属性修饰，public（默认值），private，protected）
    // name: string = '孙茂林';
    // 静态(类)属性
    static age: number = 18;
    // 只读属性
    readonly phone: string = '123456';

    // TS中的getter setter方法。这样写就不能显式存在属性name(若想存在，只能像java中那样写)
    // persoon.name person.name='' 时会被调用
    get name(){
        return this.name
    }
    set name(name:string){
        this.name = name
    }

    // 方法
    sayHello() {
        console.log(this.name);
    }
    static staticSayHello(){
        console.log(this.name);
    }

}

const person = new Person();

console.log(person.name);
console.log(Person.age);
person.sayHello();
Person.staticSayHello();


// =============================


class Dog{

    // 构造器
    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }

    name: string;
    age: number

    say(){
        console.log(this.name);
    }

}


// =============================

// 继承
class Animal{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    say(){
        console.log('动物再叫')
    }
}

class Cat extends Animal{
    
    say(): void {
        // super关键字，当作父类就好
        super.say();
        console.log(`${this.name}:喵喵`)
    }
    
}

const cat = new Cat('胖虎',4);
cat.say()


// ============================= 抽象类为TS独有，编译后就没了

// 抽象类,不能创建对象
abstract class AbstractAnimal{

    // 抽象方法，子类重写
    abstract say():void;

}

// ============================= 接口为TES独有，编译后就没了

// 描述对象的类型
type mineType = {
    name:string,
    age:number,
    [prop:string]:any
}
const mineType = {
    name:'孙茂林',
    age:17
}

// 描述类的结构，接口
interface myInterface{
    // 与java的不同是，不可以初始化作为常量使用
    name:string;
    say():void;
}
// 也可以写俩个，最后会被合并
interface myInterface{
    age:number
}
// 接口也可以当作类型去使用
const myInterface:myInterface={
    name:'孙茂林',
    age:13,
    say() {
        
    },
}
// 实现接口
class myClass implements myInterface{
    age: number;
    name: string;
    say(): void {
        
    }
}

// ============================= TS独有

// 泛型
function fn<T>(a:T):T{
    return a;
}
fn(10); // 不指定泛型，TS可以自定对类型进行推断
fn<string>('hello'); // 指定泛型
// 指定多个泛型(同时K需要继承Dog)
function fn1<T,K extends Dog>(a:T,b:K):T{
    return a;
}

class Clazz<T>{
    name:T;
    getThis<K>(a:K):T{
        return this.name;
    };
}