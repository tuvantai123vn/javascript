'use strict';
var bill =40;
var tip = 0;
bill >= 50 && bill <= 300 ? tip = bill * 0.15:
tip = bill * 0.20;

console.log(tip);

// 4.1-4.6

var country;
var population;
var capitalCity;

// function describeCountry(country, population, capitalCity){
//         var lan1 = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//         return lan1;
// }

// var print = describeCountry('Vietnam', 97, 'Hanoi');
// console.log(print);
// var print = describeCountry('Thailand', 69, 'Bangkok');
// console.log(print);
// var print = describeCountry('Rusia', 144, 'Mát-xcơ-va');
// console.log(print);

// 4.2
var populationWorld= 7900;
var input;
function percentageOfWorld1(input){
    var phantram = input / populationWorld*100;
    return phantram;
}
var print = percentageOfWorld1(69);
console.log(`ThaiLand population ${print}%`);
var print = percentageOfWorld1(125,8);
console.log(`Japan population ${print}%`);
var print = percentageOfWorld1(274,1);
console.log(`Indonesia population ${print}%`);

var percentageOfWorld2 = function (input){
    var phantram = input / populationWorld*100;
    return phantram;
}
var print = percentageOfWorld2(69);
console.log(`ThaiLand population ${print}%`);
var print = percentageOfWorld2(125,8);
console.log(`Japan population ${print}%`);
var print = percentageOfWorld2(274,1);
console.log(`Indonesia population ${print}%`);
// 4.3
var phantram;
var percentageOfWorld3 = input =>  phantram = input / populationWorld*100;
var print = percentageOfWorld3(7800);
console.log(`ThaiLand population ${print}%`);
var print = percentageOfWorld3(1600);
console.log(`Japan population ${print}%`);
var print = percentageOfWorld3(143);
console.log(`Indonesia population ${print}%`);

// 4.4
var describePopulation = function (country, population){
    var phantram = population / populationWorld*100;
    var text = ` ${country} has ${population} million people, which is about ${phantram}% of the world`;
    return text;
}
var print = describePopulation('ThaiLand',7800);
console.log(print);
var print = describePopulation('Indonesia',225);
console.log(print);
var print = describePopulation('China',1442);
console.log(print);

// 4.5

var populationsAray = [7800,225,1442,97];
console.log(populationsAray);

function percentageOfWorld1(populationsAray){
    var phantram = populationsAray / populationWorld*100;
    return phantram;
}
var percentages = new Array();
var print = percentageOfWorld1(populationsAray[0]);
percentages[0] = print;
console.log(`ThaiLand population ${percentages[0]}%`);

var print = percentageOfWorld1(populationsAray[1]);
percentages[1] = print;
console.log(`Japan population ${percentages[1]}%`);

var print = percentageOfWorld1(populationsAray[2]);
percentages[2] = print;
console.log(`Indonesia population ${percentages[2]}%`);

var print = percentageOfWorld1(populationsAray[3]);
percentages[3] = print;
console.log(`Vietnamese population ${percentages[3]}%`);
console.log(percentages);
// 4.6
var  neighbours = ['China', 'cambodia', "Lao"];
neighbours.push('Utopia');
neighbours.pop('Utopia');
for(var i =0; i<neighbours.length; i++){
    if(neighbours[i] != "Germany"){
        console.log('Probably not a central European country :D');
    }
}
var index = neighbours.indexOf('cambodia');
console.log(index);
neighbours[1] = 'Republic of cambodia';
console.log(neighbours);



