// var let const 

var a = 12;
var a;
let a = 12; 
const a = 12;

// Decalaration and Iniatialization

var a =  12; // initilize and declere
var a;   // declere

 // Scope ( Global , block  , functional)
         

 var a = 12;
 // used in full code

 {
   let a = 12;
   //no var as it is function oriented  

}


function absc(){
     var s =12;

}

// Hosting Impact time 


//  var = undefined      ye TOP P AAJAEGA 
console.log(a);
 
var a = 12;  // it will run 
 // YE 3NO m hote h 

// let a = undefined;
 console.log(a);

 let a = 12;
 
//  var -> hoist -> undefined
//  let -> hoist -> x 
//  const -> hoist -> x 

var x = 1;

{
    var x = 2;

}
console.log(x);