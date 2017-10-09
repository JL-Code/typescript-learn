//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
//bool
let isDone: boolean = false

//字符串
let firstName: string = "bob";
firstName = "smith";
//数组
let list: number[] = [1, 2, 3]
let list2: string[] = ['1', '2', '3']
//数组泛型，Array<元素类型>
let list3: Array<string> = ['1', '2', '3']
//字符串枚举
enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
//枚举
enum Types { GR, QY }

let type = Types.GR

//any 任何类型
let x: any = {}
let x1: any = "你好"

//元组
let test: [string, number, Array<number>]
let test2: [string, number, Array<any>]
test = ["元组", 1, [1212, 212]]
test2 = ["元组2", 2, ["", {}, 1212]]