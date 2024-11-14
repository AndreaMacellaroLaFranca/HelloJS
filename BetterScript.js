// console.log(myVar); Cannot print LET variable before it is defined
let myVar = 100;
if(true){
    let myVar2 = 6;
}
// console.log(myVar2); 
const myVar3 = 9; //Constant value, cannot be modified

let f1 = function myF (n1, n2){ //function expression - assign the function to a variable
    const z = n1+n2;
    return z;
}

const result = f1(3,5);

const f2 = (n1,n2) => n1+n2; //lambda - non servono molto in JS

const a1 = [3,2,"bobby"]
console.log(a1);

for(let i = 0; i<a1.length; i++){
    console.log(a1[i]);
}

for(let i of a1){ //for each
    console.log(i);
}

for(let i in a1){ //for each - "in" stampa indici, ma e' stato creato per ciclare nelle proprieta' di un oggetto
    console.log(i);
    console.log(a1[i])
}

let myObject = {
    nome: 'Riccardo',
    nazione: 'Messico',
};

for(let i in myObject){ 
    console.log(i);
}

a1.forEach(console.log);

a1.map(x=>"pippo"+x).forEach(console.log);

console.log("Hel");
console.log("GIno");





