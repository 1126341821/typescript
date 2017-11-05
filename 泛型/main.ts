//泛型:
//软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
//不用泛型的话，这个函数可能是下面这样：
function identity(arg: number): number {
    return arg;
}
//或者，我们使用any类型来定义函数：
function identity(arg: any): any {//  any，它会丢失信息
    return arg;
}
// 当我们需要对传入与输出的东西都是一个类型的时候，然而上方的any类型 返回的可以是any any：number 返回的any就不再是number

function identity<T>(arg: T): T {// 返回值的类型与传入参数的类型是相同的
    return arg;// 不同于使用 any，它不会丢失信息
}
// ====================================================================
//这个函数的人可能传入的是个数字，而数字是没有 .length属性的。
function loggingIdentity<T>(arg: T): T {// 这些类型表的是任意类型
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity<T>(arg: T[]): T[] {// 这样可以得到他是一个数组，具有length的属性  Array<T>==T[]
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
 
interface Lengthwise {// 们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字还实现约束：
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({length: 10, value: 3});
//泛型类型=====================================================================
interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
 let myIdentity: <T>(arg: T) => T = identity;
 let myIdentity: <U>(arg: U) => U = identity;// 使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
 let myIdentity: {<T>(arg: T): T} = identity;// 使用带有调用签名的对象字面量来定义泛型函数
 let myIdentity: GenericIdentityFn = identity;// 使用 泛型接口***********
// 泛型类=====================================================================
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };