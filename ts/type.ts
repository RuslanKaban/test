// class Temp {
//     private x: number

//     constructor(val?: number) {
//         val ? this.x = val : this.x = 0
//     }

//     private set setX(val: number) {
//         this.x = val
//     }

//     public get getX() {
//         return this.x
//     }
// }
// let temp1: Temp = new Temp()
// let temp2: Temp = new Temp(20)

// temp1.setX = 20
// temp1.getX

// console.log(temp1)
// console.log(temp2)

class Point {
    constructor(public x: number = 0, public y: number = 0){}
}

class Triangle{
    pointA: Point;
    pointB: Point;
    pointC: Point;

    constructor(x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0, x3: number = 0, y3: number = 0,){

    this.pointA = new Point(x1,y1);
    this.pointB = new Point(x2,y2);
    this.pointC = new Point(x3,y3);
    }
}

let triangle1 = new Triangle()
let triangle2 = new Triangle(1,2,3,4,5,6)

console.log(triangle1)
console.log(triangle2)

