var h1 = document.createElement('h1');
h1.innerHTML = "Hello";
document.body.appendChild(h1);

//in ReactJs 2 type of export 1) default 2) Name.
//default
import a from "./app.js"
console.log(a);

//name 
import {arr} from "./app.js"
console.log(arr);

import {age,ae2} from "./app.js"
console.log(age);
console.log(ae2);