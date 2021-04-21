console.log("Hello Typescript")

//Implicit types
let helloWorld = "Hello, World!"

//Explicit Types
let firstName: string = 'John';
let age: number = 30;

//gives error if some other datatype is assigned to it apart from what is specified
// firstName = 5;
// age = "name";

//Built in Types

//Tuple

type stringAndNumber = [string, number];

let x: stringAndNumber = ["Hello",10];

//Enums

enum Continents {
    North_America,
    South_America,
    Africa,
    Asia
}

var region = Continents.Africa;

//Interface

interface User {
    name:string;
    id:number;
}

const user: User = {
    name:'John',
    id: 0
}

//Composing types : Union

type WindowStates = "open" | "close" | "minimise";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const odd: OddNumberUnderTen = 5;

const getLength = (params: string | string[]) => {
    return params.length;
}

// getLength('test') // 4
getLength(['test','test1']); // 2
// getLength(2); gives error


const getLength2 = (params: string[] | number[] | any[]) => {
    return params.length;
}

getLength2([1,2,3,4]);
getLength2(["test2","test3"]);