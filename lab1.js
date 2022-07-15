var country = 'Việt Nam';
var continent = 'Asia';
var population = 97;
var isIsland = false;
const language= 'Vietnamese';

description= country + ' and its ' + population + ' million people speak ' + language
descriptionNew= `${country} and its ${population} million people speak ${language}`

var population2=population/2;
if(population>33){
    console.log(`Portugal's population is above average`);
}
else{
    console.log(`Portugal's population is below average`)
}

// console.log(typeof(isIsland));
// console.log(population);
// console.log(typeof(country));
// console.log(description);
// console.log(population > 6);
// console.log(population > 33);
// console.log(descriptionNew);

// var mark=78/[(1.69)**2];
// console.log(mark);
// var john=92/[(1.95)**2];
// console.log(john);
// var marhigherBMI= mark > john;
// console.log(marhigherBMI);

// if(mark>john){
//     console.log(`Mark's BMI is higher than John's!`);
// }
// else{
//     console.log(`John's BMI is higher than Mark's!`);
// }

// var numNeighbours= prompt('How many neighbor countries does your country have?');

// if(numNeighbours == 1){
//     console.log(`Only 1 border!`);
// }
// else if(numNeighbours >= 1){
//     console.log(`More than 1 border`);
// }
// else{
//     console.log(`No borders`);
// }

// var sarahLanguage= prompt('Language');
// var sarahContinent= prompt('Continent');
// var sarahPopulation= prompt('Population');
// var sarahIsIsland= prompt('IsIsland');
// if(sarahLanguage == language && sarahContinent == continent && sarahPopulation == population && sarahIsIsland == 'false'){
//     kq = true;
// }else{
//     kq = false;
// }
// console.log( typeof(sarahIsIsland));

// console.log(kq);
//  var language3= prompt('Language');
switch(language3){
    case 'Chinese or Mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'Spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'English':
        console.log(`3rd place`);
        break;
    
    case 'Hindi':
        console.log(`Number 4`);
        break;
    
    case 'Arabic':
        console.log(`5th most spoken language`);
        break;
    
    default:
        console.log(`Great language too`);
        break;
    
    
}