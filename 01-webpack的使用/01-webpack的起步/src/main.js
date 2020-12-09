//1. module standard using commonjs
const {add, mul} = require('./mathUtil.js')

console.log('aaa');
console.log('bbb');

//2. module standard using ES6
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);