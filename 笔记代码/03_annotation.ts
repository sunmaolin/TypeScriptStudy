function f1() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("f(): called");
    }
}

function g1() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f1()
    @g1()
    method(param:string) {}
}


// 类装饰器(只有一个参数，就是构造函数)
function sealed(constructor: Function){
    // 封闭对象
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(constructor);
}
@sealed
class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return "hello,"+this.greeting;
    }
}

// 类装饰器 重载构造函数
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T){
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
@classDecorator
class Greeter1 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}
console.log(new Greeter1('word'));

// 重载构造函数 在装饰器上添加参数的写法
function classDecorator1(param: object){
    console.log(param);
    return function<T extends {new(...args:any[]):{}}>(constructor: T){

    }
}
@classDecorator1({
    a: 1
})
class Greeter2 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log("===============方法装饰器=================")
// 方法装饰器
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.enumerable = value;
    };
}
class Greeter3 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}


console.log("===============访问器装饰器=================")
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}


console.log("===============属性装饰器=================")
// import "reflect-metadata";

// const formatMetadataKey = Symbol("format");

// function format(formatString: string) {
//     return Reflect.metadata(formatMetadataKey, formatString);
// }

// function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// class Greeter4 {
//     @format("Hello, %s")
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         let formatString = getFormat(this, "greeting");
//         return formatString.replace("%s", this.greeting);
//     }
// }