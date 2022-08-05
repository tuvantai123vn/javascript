'use strict';
let bill = 40;
let tip = 0;
bill >= 50 && bill <= 300 ? tip = bill * 0.15 :
    tip = bill * 0.20;

console.log(tip);

// 4.1-4.6

let country;
let population;
let capitalCity;

// function describeCountry(country, population, capitalCity){
//         let lan1 = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//         return lan1;
// }

// let print = describeCountry('Vietnam', 97, 'Hanoi');
// console.log(print);
// let print = describeCountry('Thailand', 69, 'Bangkok');
// console.log(print);
// let print = describeCountry('Rusia', 144, 'Mát-xcơ-va');
// console.log(print);

// 4.2
let populationWorld = 7900;
let input;
function percentageOfWorld1(input) {
    let phantram = input / populationWorld * 100;
    return phantram;
}
print = percentageOfWorld1(69);
console.log(`ThaiLand population ${print}%`);
print = percentageOfWorld1(125, 8);
console.log(`Japan population ${print}%`);
print = percentageOfWorld1(274, 1);
console.log(`Indonesia population ${print}%`);

let percentageOfWorld2 = function (input) {
    let phantram = input / populationWorld * 100;
    return phantram;
}
print = percentageOfWorld2(69);
console.log(`ThaiLand population ${print}%`);
print = percentageOfWorld2(125, 8);
console.log(`Japan population ${print}%`);
print = percentageOfWorld2(274, 1);
console.log(`Indonesia population ${print}%`);
// 4.3
let phantram;
let percentageOfWorld3 = input => phantram = input / populationWorld * 100;
print = percentageOfWorld3(7800);
console.log(`ThaiLand population ${print}%`);
print = percentageOfWorld3(1600);
console.log(`Japan population ${print}%`);
let print = percentageOfWorld3(143);
console.log(`Indonesia population ${print}%`);

// 4.4
let describePopulation = function (country, population) {
    let phantram = population / populationWorld * 100;
    let text = ` ${country} has ${population} million people, which is about ${phantram}% of the world`;
    return text;
}
print = describePopulation('ThaiLand', 7800);
console.log(print);
print = describePopulation('Indonesia', 225);
console.log(print);
print = describePopulation('China', 1442);
console.log(print);

// 4.5

let populationsAray = [7800, 225, 1442, 97];
console.log(populationsAray);

function percentageOfWorld1(populationsAray) {
    let phantram = populationsAray / populationWorld * 100;
    return phantram;
}
let percentages = new Array();
print = percentageOfWorld1(populationsAray[0]);
percentages[0] = print;
console.log(`ThaiLand population ${percentages[0]}%`);

print = percentageOfWorld1(populationsAray[1]);
percentages[1] = print;
console.log(`Japan population ${percentages[1]}%`);

print = percentageOfWorld1(populationsAray[2]);
percentages[2] = print;
console.log(`Indonesia population ${percentages[2]}%`);

print = percentageOfWorld1(populationsAray[3]);
percentages[3] = print;
console.log(`Vietnamese population ${percentages[3]}%`);
console.log(percentages);
// 4.6
let neighbours = ['China', 'cambodia', "Lao"];
neighbours.push('Utopia');
neighbours.pop('Utopia');
for (let i = 0; i < neighbours.length; i++) {
    if (neighbours[i] != "Germany") {
        console.log('Probably not a central European country :D');
    }
}
let index = neighbours.indexOf('cambodia');
console.log(index);
neighbours[1] = 'Republic of cambodia';
console.log(neighbours);



