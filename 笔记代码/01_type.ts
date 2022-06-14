/**
 * 类型声明
 * 
 * 类型             例子                        描述
 * number          1,2,3
 * string          "hi"
 * boolean         true
 * 字面量          其本身                 限制变量的值就是该字面量的值
 * any              *                    任意类型
 * unknown          *                    类型安全的any
 * void         空值（undefined）        没有值（或undefined）
 * never          没有值                 不能是任何值
 * object       {name:'孙茂林'}         
 * array          [1,2,3]
 * tuple          [4,5]                 元素，TS新增类型。固定长度数组
 * enum           enum{A,B}             枚举，TS新增类型
 */



// 声明number类型变量a
let a: number = 10; 
// 直接赋值是可以省略类型声明
let b = 20;  

// 方法类型声明(参数及返回值)
function sum(a: number,b: number): number{
    return a + b;
}


// 字面量类型声明，如下 限制c的值只能为10
let c: 10;
// c = 11; 报错，只能为10
// 也可以使用 | 来连接多个类型（联合类型，相当于或的意思）
let d: "male" | "female";
d = "male";
d = "female";
let e: boolean | string;
e = true;
e = '你好';

// ======================================

// any类型声明，可以任意类型（不建议使用）
let f: any;
f = 1;
f = '你好';
// 不指定默认any
let g;

// unknown 表示未知类型的值(类型安全的any)
let h: unknown;
h = 10;
h = '你好';

// any与unknown的类型
e = f; // any 可以赋值给任意类型
// e = h; // unknown 不可以

// unknown如果非要赋值，可以做类型检查
if(typeof h === 'string'){
    e = h;
}
// unknown如果非要赋值，也可以使用类型断言。来告诉解析器变量的实际类型
e = h as string;
e = <string>h;

// ======================================

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn1(): void{
    
}
// never 表示永远不会返回结果(如函数抛出错误)
function fn2(): never{
    throw new Error('报错了!');
}

// ======================================

// object表示一个js对象
let i: object;
i = {};
i = function(){};

// 指定对象包含哪些属性
let j: {name: string,age?: number};
// 有且只能存在name属性
j = {name:'孙茂林'};

// 属性后加？表示可选
let k: {name: string,age?: number};
// age属性可选
k = {name:'孙茂林'};

// [prop: string]: any 表示任意类型的属性
let l: {name: string,[prop: string]: any};
l = {name:'sml',a:1,b:2}

// 声明函数m参数a,b为number，返回值为numebr。固定参数类型和返回值
let m:(a: number,b: number)=>number;
m = function(a,b){return a+b};
// 同属性，也可以配置可选参数
let n:(a: number,b?: number)=>number;

// ======================================

// array 数组
let o: string[];
let p: Array<number>;

// 元组,tuple 固定长度数组
let q: [string,number];

// 枚举
enum Gender{
    // 默认按照顺序等于0 等于1，也可以指定
    Male,
    Female,
    Other = 4
}
let r: {name:string,gender:Gender};
r = {
    name:'孙茂林',
    gender:Gender.Male
}
r.gender === Gender.Male

// ======================================

// 类型别名(针对字面类型的多个类型去设定)
type myType = string;
let s: myType;
type myType1 = 1 | 2 | 3;
let t:myType1;








