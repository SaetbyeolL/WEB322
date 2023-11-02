// var obj =  {
//     property: value,
//     property2: value2
// }

// var covid = {
//     strain: "alpha",
//     year: 2020,
//     type: "virus",
//     setStrain: function(newStrain) { this.strain = newStrain }, // this -> covid
//     setYear: function(newYear) {this.year = newYear},
//     getStrain: function() {return this.strain},
//     getYear: function() {return this.year}
// }

// console.log(covid.setStrain("delta"));
// console.log(covid.getStrain());


class covid { // separate code, we don't need to semicolumn
    strain
    year
    type = "virus"

    constructor(setStrain = "", setYear=0) {
        this.strain = setStrain
        this.year = setYear
    }
    setStrain(newStrain){this.strain = newStrain}// method: function inside of an object
    setYear(newYear) {this.year = newYear}
    getStrain() {return this.strain}
    getYear() {return this.year}

}

var alpha = new covid("alpha", 2020)
var delta = new covid("dalta", 2021)
var omicron = new covid("omicron", 2022)

console.log(alpha.getYear());
console.log(alpha.getStrain());

//this will come up on your test : use the class method to or use the class notation or method, define this






