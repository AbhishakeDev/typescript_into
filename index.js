console.log("Hello Typescript");
//Implicit types
var helloWorld = "Hello, World!";
//Explicit Types
var firstName = 'John';
var age = 30;
var x = ["Hello", 10];
//Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
})(Continents || (Continents = {}));
var region = Continents.Africa;
var user = {
    name: 'John',
    id: 0
};
"open" | "close" | "minimise";
"locked" | "unlocked";
1 | 3 | 5 | 7 | 9;
var odd = 5;
var getLength = function (params) {
    return params.length;
};
// getLength('test') // 4
getLength(['test', 'test1']); // 2
// getLength(2); gives error
var getLength2 = function (params) {
    return params.length;
};
getLength2([1, 2, 3, 4]);
getLength2(["test2", "test3"]);
