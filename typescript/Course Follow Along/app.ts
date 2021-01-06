function add(n1: number, n2: number, showResult?: boolean, phrase?: string): number {
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}

const number1 = 5
const number2 = 2.8;
const printPhrase = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printPhrase, resultPhrase);

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

enum Role { ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favoriteActivites: string[];
favoriteActivites = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR) {
    console.log('is author');
}

type Combinable = number | string;
type ConversionResult =  'as-number' | 'as-text';

function combine (input1: Combinable, input2: Combinable, resultType: ConversionResult) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }

    return result;

}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const stringAges = combine('30', '20', 'as-number');
console.log(stringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

function printResult (num: number) {
    console.log(`Result: ${num}`);
}

printResult(add(5, 12));