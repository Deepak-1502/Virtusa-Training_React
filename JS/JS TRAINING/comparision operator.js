alert("comparision operator");

//equal check
let a=90;
let b=8;
console.log(a==b); //we can use condition also but here it is enough

a=9;
b=9;
console.log(a==b);

// double equal supports which chech only values here data type is does not a matter
a=90;
b="90";
console.log(a==b);

//triple equal which will also check for data type and value
a=90;
b="90";
console.log(a===b);

a="90";
b="90";
console.log(a===b);

a="9";
b="90";
console.log(a===b); // false will happen because value is different but data type is common 

//Not equal
a=90;
b=9;
console.log(a!=b);