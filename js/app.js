/*
//ex 1

let a = 1, b = 1; 
let c = ++a + --a + b-- - b; // c = 4
let d = b++ - a - ++b + b++ - --a; // d = -1

*/

/*
let a = 2; 
let x = 5 + (a *= 2 + (a += 4) + a++);//x=33

//a=28

*/


// alert( alert(1) || 2 || alert(3) ); 

let username = "admin"
let a = prompt("login");
if (a === username){
  console.log(a);
}
else {
  alert("otmen buldi");
}

let password = "12345"
let b = prompt("password")
if (b === password){
  console.log(b);
  alert("e salom uzbellaga!");
}
else {
  alert("otmena ku yana, sassiq");
}



