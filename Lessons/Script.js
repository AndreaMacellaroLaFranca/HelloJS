console.log('Eseguo JavaScript da un file esterno');
 var x = 3;
 console.log(typeof(x));
 x = 'ciccio';
 console.log(typeof(x));

 function sum(n1,n2){
    return n1+n2;
 }
 
 console.log(f); //variable hoisting

 var z = sum(6,3);
 console.log (z);

 z = sum(6, 'ciao');
 console.log(z);

 z = sum(6,3,9);
 console.log(z);

 z = sum(6);
 console.log(z);

 z = sum(6, true);
 console.log(z);

 if(true){
    console.log("z vale 3")
 }

 z = undefined;

 var f = "variabile molto importante";

 if(true){
    console.log("z vale 3");
    var y = 70;
 }

 console.log(y);

 function myFunction(){
    console.log("Chiamata a \"myFunction\"");
    f = 5;
 }

 console.log(f);
 myFunction();
 console.log(f);
 console.log("Hello gus");




