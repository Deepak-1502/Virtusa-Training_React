/*var
let
const
 */
alert("alert has been noted");
var a=10; //this method pf variable declaration is done on 1997 to 2015
var b=90;
console.log(a+b);
/* after 2015 we have using var but in addition to than we have using
let and const these are mostly using elements*/

/*difference in using var  */
// 1.Scope
console.time("times");
if(true) //for example it have been taken simply if the condition is true
{
    var s="good morning all";
}
console.log(s); /* by using var if the variable is declared in the 
if condition if we print that variable outside means also it will print*/
console.timeEnd('times');
 if(true)
 {
    let d="what a day"; // by using let we cannot acces outind the declared location

 }
   //console.log(d);


  // CONST - const is also like let inside the scope only it will work outside it will not work
   if(true)
   {
    const u="Come to learn java script";
    console.log(u); //inside the scope
   }
  // console.log(u); // outside the scope

   //Re Declaration
    var q=24;
    console.log(q);
     var q=80;
     console.log(q); /* by using the var if we if use already declared 
     variable it will change the old value to newly declared
      value to avoid this we can use let */
/*
      let w=90;
      console.log(w);
      let w=80;
      console.log(w); // LET will show error when we again declare with same variable
*/
      //CONST
      /*
      const r=60;
      console.log(r);
      const r=608;
      console.log(r); //this also we cannto able to redeclare
      */

//3.value Assignment

var a=25;
console.log(a);
 a=45;
console.log(a);

let z=34;      //this is value assingnment in this let will work as like VAR
console.log(z);
z=90;
console.log(z);
/*
const g=70;
console.log(g);
g=68;
console.log(g); //this value assignment cannot be done on const error will occur
*/

// We can re assign the value in const by using object
const student={"Name":"Deepak","Age":21};
console.log(student);
console.table(student);
console.log(student.Name); // this will print the specified value
student.Name="Good work deepak"; // this will chane the value of name in student variable or object
console.table(student);