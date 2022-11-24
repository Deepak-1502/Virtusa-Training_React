/*JS is dynamic
Types
String ed: deepak,good
    number   eg:1,2.3
    Boolean:   eg. True false
    Null
    Undefined
    Symbols ... which has been introduced in Es6
    
    Reference types
      Array
      Objects
      Date
      Object literals
      */
     alert("Data types");
var a=49; // nuber type
console.log(a);
console.log(typeof a);

var b=40.9; //its also a nuber type
console.log(b);
console.log(typeof b);

var fname="Deepak"; // it is string type
console.log(fname);
console.log(typeof fname);

var age=false; // boolean
console.log(age);
console.log(typeof age);

var pnumber=null; // it is null value which says output as object
console.log(pnumber);
console.log(typeof pnumber);

var s; // which is an undefined because we just declare the values
console.log(s);
console.log(typeof s);
let m; // undefined is common foe var and let
console.log(m);
console.log(typeof m);

//Symbol 
const s1=Symbol(); /* we give empty value it automatically 
takes some unique value like poiuytrewsdfghj*/
console.log(s1); //it will print Symbol() but browser kows the default value
  const s2=Symbol();
  console.log(s2);

  console.log(s1==s2); /* it will chech whether the two values are equal
  surely it willnot equal */
  
  console.log(s1!=s2);

  //Reference types

  var ar=['C','C++','JAVA','Python']; // Array type
  console.log(ar);
  console.log(typeof ar); //these type are come under object type

  var stu={   //which is json value
    'name':'DEEPAK',
    'age':21,
    'gender':'male'
  }
  console.table(stu);
  console.log(typeof stu);//this also come under object

  var d=new Date();//which is a date function and show current date
  console.log(d);
  console.log(typeof d); // it is also object


