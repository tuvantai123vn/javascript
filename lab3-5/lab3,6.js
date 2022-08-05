// lab 3.6.1
// du lieu 1
let dolphins = 96 + 108 + 89;
let koalas = 88 + 91 + 110;
// du lieu 2
let dolphins2 = 97 + 112 + 101;
let koalas2 = 109 + 95 + 123;
// du lieu 2
let dolphins3 = 97 + 112 + 101;
let koalas3 = 109 + 95 + 106;
// trung binh
let TBdolphins = dolphins / 3;
let TBkoalas = koalas / 3;
if (TBdolphins > TBkoalas) {
    console.log(`Dolphins la doi chien thang`);
} else if (TBdolphins < TBkoalas) {
    console.log(`Koalas  la doi chien thang`);
} else {
    console.log(`Hai doi hoa nhau`);
}

if ((dolphins2 / 3) > (koalas2 / 3) && (dolphins2 / 3) >= 100) {
    console.log(`Dolphins la doi chien thang`);
} else if ((dolphins2 / 3) < (koalas2 / 3) && (koalas2 / 3) >= 100) {
    console.log(`Koalas la doi chien thang`);
} else {
    console.log(`Hai doi hoa nhau`);
}

if ((dolphins3 / 3) > (koalas3 / 3) && (dolphins3 / 3) >= 100) {
    console.log(`Dolphins la doi chien thang`);
} else if ((dolphins3 / 3) < (koalas3 / 3) && (koalas3 / 3) >= 100) {
    console.log(`Koalas la doi chien thang`);
} else {
    console.log(`Hai doi hoa nhau`);
}
console.log(dolphins3);
console.log(koalas3);

// 4.7
let TBdolphins4 = (85 + 54 + 41) / 3;
let TBkoalas4 = (23 + 34 + 27) / 3;
const checkWinner = (TBdolphins4, TBkoalas4) => {
    if (TBdolphins4 >= TBkoalas4 * 2) {
        console.log(`Dolphins win (${TBdolphins4} vs. ${TBkoalas4})`);
    } else if (TBkoalas4 >= TBdolphins4 * 2) {
        console.log(`Koalas win (${TBkoalas4} vs. ${TBdolphins4})`);
    } else {
        console.log("no no no");
    }
}
// 5.1
let myCountry = {
    country: 'Vietnam', capital: 'Hanoi', language: 'Vietnamese', population: 97, neighbours: 3, describe: function () { console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}`) }, isIsland: true, checkIsland: function () {
        this.isIsland == this.neighbours.length === 0 ? true : false;
    }
};
myCountry.population + 2;
myCountry['population' - 2];
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.describe();
// Lab 5.4. Vòng lặp For (5 phút)
// for(let i=0; i <50; i++){
//     console.log(`Voter number ${i+1} is currently voting`)
// }
// Lab 5.5. Lặp trong array, break và continue (15 phút)
let populationsAray = [7800, 225, 1442, 97];
let populationWorld = 7900;
let percentages2 = [];
for (let i = 0; i < populationsAray.length; i++) {
    let phantram = populationsAray[i] / populationWorld * 100;
    percentages2[i] = phantram;
}
console.log(percentages2);
// Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp (15 phút)
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log('Neighbour: ', listOfNeighbours[i][j]);
    }
}
// Lab 5.7. Vòng lặp While (10 phút)
let rep = 1;
let arrwhile = [];
while (rep <= populationsAray.length) {
    let phantram = populationsAray[rep - 1] / populationWorld * 100;
    arrwhile[rep - 1] = phantram;
    rep++;
}
console.log(arrwhile);


// checkWinner(TBdolphins4,TBkoalas4);
let a = checkWinner(TBdolphins4, TBkoalas4);
// 5.8.1
let Mark = {
    fullname: 'Mark Miller', mass: 78, height: 1.69, calcBMI: function (mass, height) {
        return mass / [(height) ** 2]
    }
};
let John = {
    fullname: 'John Smith', mass: 92, height: 1.95, calcBMI: function (mass, height) {
        return mass / [(height) ** 2]
    }
}
if (Mark.calcBMI(Mark.mass, Mark.height) > John.calcBMI(John.mass, John.height)) {
    console.log(Mark.fullname, Mark.calcBMI(Mark.mass, Mark.height));
} else {
    console.log(John.calcBMI(John.fullname, John.mass, John.height));
}
// 5.8.2
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
function calcTip() {
    let tip;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] >= 50 || bills[i] <= 300) {
            tip = bills[i] * 0.15;
            tips.push(tip);
            totals.push(bills[i] + tip);
        } else {
            tip = bills[i] * 0.20;
            tips.push(tip);
            totals.push(bills[i] + tip);
        }
    }
}
calcTip();
console.log(tips);
console.log(totals);
let sum = 0;
for (let i = 0; i < bills.length; i++) {
    sum += totals[i];
}
console.log(sum / i);

