'use strict';
// lab 12.1
const checkDogs = function(dogsJulia, dogskate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    const dogs = dogsJuliaCorrected.concat(dogskate);
    console.log(dogs);

    dogs.forEach(function(dog, i){
        if(dog >= 3){
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        }else{
            console.log(`Dog number ${i+1} is still a puppy`);
        }
    })
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// lab 12.2
const calcAvergeHumanAge2 = function(ages){
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age *4);
    const adults = humanAges.filter(age => age >=18)
    console.log(humanAges);
    console.log(adults);
    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return average;
}
// lab 12.3
const calcAvergeHumanAge = ages => ages.map(age => age <= 2 ? 2 * age : 16 + age *4).filter(age => age >=18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);


const avg1 = calcAvergeHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAvergeHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1,avg2)

