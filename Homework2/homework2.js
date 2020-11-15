//Task1
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + "" + y;
console.log(res2);
console.log(typeof res2);

let res3 = (x < y);
console.log(res3);
console.log(typeof res3);

let res4 = parseInt("a" + x + y);
console.log(res4);
console.log(typeof res4);

//Task2
let input = prompt('Please enter a number');
if(!isNaN(input)) {
    console.log(`If the number ${input} is positive even one: ${(!Boolean(input % 2) && (input > 0))}`);
    console.log(`If the number multiples of 7: ${!Boolean(input % 7)}`)
}

//Task3
let arr = [];
arr[0] = 1;
arr[1] = 'abc';
arr[2] = true;
arr[3] = null;
alert(`Number of elements in the array: ${arr.length}`);
arr[5] = prompt('Please specify another element for the array');
alert(`5th element of the array: ${arr[5]}`);
arr.shift();
alert(`The array after removing of the first element: ${arr}`);

//Task4
let cities = ["Rome", "Lviv", "Warsaw"];
let resultString = "";
cities.forEach((el) => {
    (cities.indexOf(el) !== cities.length-1) ? resultString += el + '*' : resultString += el;
});
console.log(resultString);

//Task5
let isAdult = prompt('Please specify your age');
(isAdult >= 18) ? alert("You're adult") : alert("You're too young");

//Task6
let sideA = Number(prompt("Specify triangle's side A"));
let sideB = Number(prompt("Specify triangle's side B"));
let sideC = Number(prompt("Specify triangle's side C"));

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log('Incorrect data');
} else {
    if((sideA + sideB) > sideC && (sideA + sideC) > sideB && (sideB + sideC) > sideA) {
        console.log('The triangle exists');
        const sp = (sideA + sideB + sideC)/2;
        console.log(`The triangle's square is ${(Math.sqrt(sp*(sp - sideA)*(sp - sideB)*(sp - sideC))).toFixed(3)}`)
        let sides = [sideA, sideB, sideC];
        let maxSide = Math.max.apply(null, arr);;
        sides.splice(sides.indexOf(maxSide), 1)
        if(maxSide ** 2 === (sides[0] ** 2 + sides[1] ** 2)) {
            console.log('The triangle is right');
        }
    }
}

//Task7
//Else...If variant
const hours = new Date(Date.now()).getHours();
if(hours === 23 || (0 < hours && hours < 5)) {
    console.log('Good night!');
} else if(5 <= hours && hours < 11) {
    console.log('Good morning!');
} else if(11 <= hours && hours < 17) {
    console.log('Good day!');
} else if(17 <= hours && hours < 23) {
    console.log('Good evening!');
}

//Switch...case variant
switch (true) {
    case (hours === 23 || (0 < hours && hours < 5)):
        console.log('Good night!');
        break;
    case (5 <= hours && hours < 11):
        console.log('Good morning!');
        break;
    case (11 <= hours && hours < 17):
        console.log('Good day!');
        break;
    case (17 <= hours && hours < 23):
        console.log('Good evening!');
        break;
    default:
        break;
}
