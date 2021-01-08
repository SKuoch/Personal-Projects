function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printPhrase = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printPhrase, resultPhrase);
// interface IPerson  {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple Type: fixed length and type
// };
// const person: IPerson = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivites;
favoriteActivites = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var stringAges = combine('30', '20', 'as-number');
console.log(stringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// Function Types
var combineValues; // expect to get a function that takes 2 params, and returns a number
combineValues = add;
// combineValues = 5; 
// combineValues = printResult
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
