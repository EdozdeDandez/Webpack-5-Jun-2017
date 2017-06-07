
import User from "./new.es6";
var us = new User(35);
document.write('Hallo. Welcome!!');
console.log('app loaded');
document.getElementById('new').innerHTML = "My name is Edith";
document.getElementById('estest').innerHTML = us.age;
console.log(us.age);
