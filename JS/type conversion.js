alert("Type conversion");
 // in  java script integer we will say as number 
 
 // This is below example is for number to string type
let a;
a=45;
console.log(a,typeof a);
a=String(a); //this is string class or string function which converts number to string
console.log(a,typeof a);

// this is for double value also to string

let b;
b=90.98;
console.log(b,typeof b);
b=String(b);
console.log(b, typeof b);

//this will also apply for boolean to string

let c;
c=true;
console.log(c,typeof c);
c=String(c);
console.log(c,typeof c);

// this also apply for date function to string
 let d;
 d=new Date();
 console.log(d,typeof d);
 d=String(d);
 console.log(d,typeof d);

 // Array to string also possible
let e=[1,2,3,4,5,6,7,8,9,10];
console.log(e,typeof e);
e=String(e);
console.log(e,typeof e);

/*still now we use string class by simple there is am another technique
which is an toString method*/
a=54;
console.log(a,typeof a);
a=a.toString();
console.log(a,typeof a);

//----------------------------------------------------------------------------------------------------------------//
 //String to number

f="976";
console.log(f,typeof f);
f=Number(f); 
console.log(f,typeof f);

// We can convert boolean to number
 g=true;
 console.log(g,typeof g);
 g=Number(g);
console.log(g,typeof g);  // in boolean true is 1 and false is 0

h=false;
console.log(f,typeof f);
h=Number(h);
console.log(h,typeof h);

//Array to number

i=[1,2,2,3,4,5];
console.log(i,typeof i);
i=Number(i);
console.log(i,typeof i); /*this will cant chage to number but the
 type will be change to number output value will not
  change it will show as NaN Not a Number which means it is 
  not a number */

  //String to number

  //The same array concept will apply for string
  i="Hello eVERYONE";
  console.log(i,typeof i);
  i=Number(i);
  console.log(i,typeof i);

  //PARSE INT and PARSE FLOAT
   j="55";
   console.log(j,typeof j);
   j=parseInt(j); //which converts to integer values even the valiue is in float
   console.log(j,typeof j);

   j="333.9";
   console.log(j,typeof j);
   j=parseFloat(j);
   console.log(j,typeof j);

   