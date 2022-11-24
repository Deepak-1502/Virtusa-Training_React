alert("Math Function");
 //PI Value
 let a;
 a=Math.PI;
 console.log(a);

 a=Math.E;
 console.log(a);

 //round off function
 a=Math.round(6.9);
 console.log(a);

 a=Math.round(6.1);
 console.log(a);

 //floor remove the value after decimal point
 a=Math.floor(9.7);
 console.log(a);

 /*ceil will give whole value
  for the decimal which is next highest value will come*/
a=Math.ceil(2.2);
console.log(a);

//square root
a=Math.sqrt(4);
 console.log(a);

 //Absolute number -which if we give any negatve number it will change to positive

 a=Math.abs(-98);
 console.log(a);

 //trunc function which we can get whole number from decimal number
 a=Math.trunc(89.8);
 console.log(a);

 //power function two values we need to give base value and power value
 a=Math.pow(3,5);
 console.log(a);

 //to find maximum value
 a=Math.max(12,11,13,14);
 console.log(a);

 //to find minimum value
 a=Math.min(21,12,1,2,34,5);
 console.log(a);

 //random number
 a=Math.random();
 console.log(a); //which gives random decimal number while refreshing

 //Random number 1 to 50
 a=Math.floor(Math.random()*50+1); // floor fn to change to whole number *50+1 wiil give number from 1 to 50
 console.log(a);

 a=Math.floor(Math.random()*50+1); // trunc also we can use to change to whole number *50+1 wiil give number from 1 to 50
 console.log(a);

 //To find number +ve or -ve we use sign function
a=Math.sign(90); // number is +ve means 1 will appear
console.log(a);

a=Math.sign(-8);// number is -ve means -1 will appear
console.log(a);

a=Math.sign(0);// number is 0 means -0 will appear
console.log(a);
//trignometry valuesalso we can give
a=Math.sin(90);
console.log(a);

a=Math.cos(90);
console.log(a);

a=Math.tan(90);
console.log(a);

a=Math.log(90);
console.log(a);

a=Math.log2(90);
console.log(a);

a=Math.log10(90);
console.log(a);