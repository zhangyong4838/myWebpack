import pic from './assets/images/logo.png'
console.log(pic);

var img = new Image()
img.src = pic;
var root = document.getElementById('app')
root.append(img)