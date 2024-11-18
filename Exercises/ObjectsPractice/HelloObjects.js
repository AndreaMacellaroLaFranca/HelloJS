let x = {
    name: "ciccio",
    lastName: "pasticcio",
    languages: ["JavaScript","Java"],
    sayHello: function(){
        console.log(`Ciao sono ${this.name} ${this.lastName} e i miei linguaggi preferiti sono ${this.languages}`);
    }
};

x.sayHello();
console.log(typeof x);
console.log (x.languages);

//CONSTRUCTOR AND CREATION OF OBJECT
function Developer(name,lastName,languages){
    this.name = name
    this.lastName = lastName
    this.languages = languages
    this.sayHello = function(){
        console.log(`Ciao sono ${this.name} ${this.lastName} e i miei linguaggi preferiti sono ${this.languages}`);
    }
};

let y = new Developer("Pico","Depaperis", ["JS", "Python", "Java"]);
console.log(y.lastName);
console.log(typeof y);
y.sayHello();

console.log(Object.prototype.constructor == Object);
console.log(x.__proto__ == Object.prototype);
console.log(x.constructor == Object);
console.log(x.constructor.prototype == x.__proto__);

Developer.prototype.sayHello = function(){
    console.log(`Ciao sono ${this.name} ${this.lastName} e i miei linguaggi preferiti sono ${this.languages}`);
};
console.log(y.toString());

Developer.prototype.writeCode = function(){
    for(let lan of this.languages){
        console.log("Scrivo codice per un ora di: "+lan);
    }
}

Developer.prototype.toString = function(){
    return `${this.name} ${this.lastName} ${this.languages.length}`;
};
console.log(y.toString());

function SeniorDeveloper(name, lastName, languages, bonus, yearsToRetirement){
    Developer.call(this,name,lastName,languages);
    this.bonus = bonus;
    this.yearsToRetirement = yearsToRetirement;
};

SeniorDeveloper.prototype = new Developer();

SeniorDeveloper.prototype.manage = function(developer){
    console.log("Non ci penso n emmeno a lavorare io");
    developer.writeCode();
    console.log(`${this.name} ha finito di lavorare per oggi`);
};

SeniorDeveloper.prototype.writeCode = function(){
    for(let lan of this.languages){
        console.log("Non ho voglia di scrivere codice di "+lan);
    }
};

let sr = new SeniorDeveloper("Pippo","Depippis",["java", "javascript"], 2000, 10);
// console.log(global.languages);

sr.writeCode();
sr.manage(y);
console.log(sr.lastName);
y.sayHello.call(sr);

function showThis(){
    console.log(this);
};

showThis();




