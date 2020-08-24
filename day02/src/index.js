import pic from './assets/images/logo.png';
import css from './assets/css/index.css'
console.log(pic);

var img = new Image()
img.src = pic;
var root = document.getElementById('app')
root.append(img)