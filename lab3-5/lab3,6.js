// lab 3.6.1
// du lieu 1
var dolphins = 96 + 108 + 89;
var koalas = 88 + 91 + 110;
// du lieu 2
var dolphins2 = 97 + 112 + 101;
var  koalas2 = 109 + 95 + 123;
// du lieu 2
var dolphins3 = 97 + 112 + 101;
var  koalas3 = 109 + 95 + 106;
// trung binh
var TBdolphins = dolphins /3;
var TBkoalas = koalas / 3;
if(TBdolphins > TBkoalas){
    console.log(`Dolphins la doi chien thang`);
}else if(TBdolphins < TBkoalas){
    console.log(`Koalas  la doi chien thang`);
}else{
    console.log(`Hai doi hoa nhau`);
}

if((dolphins2/3) > (koalas2/3) && (dolphins2/3) >= 100){
    console.log(`Dolphins la doi chien thang`);
}else if((dolphins2/3) < (koalas2/3) && (koalas2/3) >= 100){
    console.log(`Koalas la doi chien thang`);
}else{
    console.log(`Hai doi hoa nhau`);
}

if((dolphins3/3) > (koalas3/3) && (dolphins3/3) >= 100){
    console.log(`Dolphins la doi chien thang`);
}else if((dolphins3/3) < (koalas3/3) && (koalas3/3) >= 100){
    console.log(`Koalas la doi chien thang`);
}else{
    console.log(`Hai doi hoa nhau`);
}
console.log(dolphins3);
console.log(koalas3);

// 4.7
var TBdolphins4 = (85+54+41)/3;
var TBkoalas4 = (23+34+27)/3;
const checkWinner = (TBdolphins4,TBkoalas4) => {
    if(TBdolphins4 >= TBkoalas4*2){
        console.log(`Dolphins win (${TBdolphins4} vs. ${TBkoalas4})`);
    }else if(TBkoalas4 >= TBdolphins4*2){
        console.log(`Koalas win (${TBkoalas4} vs. ${TBdolphins4})`);
    }else{
        console.log("no no no");
    }
}
// 5.1
var myCountry= {country: 'Vietnam', capital: 'Hanoi', language: 'Vietnamese', population: 97, neighbours: 3, describe: function(){console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}`)},isIsland: true , checkIsland: function(){
    this.isIsland == this.neighbours.length ===0 ? true: false;
}};
myCountry.population+2;
myCountry['population'-2];
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.describe();
// Lab 5.4. Vòng lặp For (5 phút)
// for(var i=0; i <50; i++){
//     console.log(`Voter number ${i+1} is currently voting`)
// }
// Lab 5.5. Lặp trong array, break và continue (15 phút)
var populationsAray = [7800,225,1442,97];
var populationWorld= 7900;
var percentages2=[];
    for(var i=0; i<populationsAray.length; i++){
        var phantram = populationsAray[i] / populationWorld*100;
        percentages2[i] = phantram;
    }
console.log(percentages2);
// Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp (15 phút)
var listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(var i=0; i <listOfNeighbours.length; i++){
    for(var j=0; j < listOfNeighbours[i].length; j++){
        console.log('Neighbour: ',listOfNeighbours[i][j]);
    }
}
// Lab 5.7. Vòng lặp While (10 phút)
var rep =1;
var arrwhile =[];
while(rep <= populationsAray.length){
    var phantram = populationsAray[rep-1] / populationWorld*100;
    arrwhile[rep-1] = phantram;
    rep++;
}
console.log(arrwhile);


// checkWinner(TBdolphins4,TBkoalas4);
var a = checkWinner(TBdolphins4,TBkoalas4);
// 5.8.1
var Mark = {fullname: 'Mark Miller', mass: 78, height: 1.69, calcBMI: function(mass,height){
    return mass/[(height)**2]
} };
var John = {fullname: 'John Smith', mass: 92, height: 1.95, calcBMI: function(mass,height){
    return mass/[(height)**2]
}}
if(Mark.calcBMI(Mark.mass,Mark.height) > John.calcBMI(John.mass,John.height)){
    console.log(Mark.fullname, Mark.calcBMI(Mark.mass,Mark.height));
}else{
    console.log(John.calcBMI(John.fullname, John.mass,John.height));
}
// 5.8.2
var bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips=[];
var totals=[];
function calcTip(){
    var tip;
    for(var i=0; i <bills.length; i++){
        if(bills[i] >= 50 || bills[i] <= 300){
            tip = bills[i] * 0.15;
            tips.push(tip);
            totals.push(bills[i] + tip);
        }else{
            tip = bills[i] * 0.20;
            tips.push(tip);
            totals.push(bills[i] + tip);
        }
    }
}
calcTip();
console.log(tips);
console.log(totals);
var sum =0;
for(var i =0; i< bills.length; i++){
    sum += totals[i];
}
console.log(sum/i);

