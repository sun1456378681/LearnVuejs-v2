//1. module standard using commonjs
const {add, mul} = require('./js/mathUtil.js')

console.log('aaa');
console.log('bbb');

//2. module standard using ES6
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3. rely on css file
require('./css/normal.css')

//4. rely on less file
require('./css/speical.less')
document.writeln('<h2>你好啊，李银河！</h2>')

//5. develop by vue
import Vue from 'vue'
import App from './vue/app'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})