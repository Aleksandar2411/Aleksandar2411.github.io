

// changing individual properties with code and using setInterval
var rotationSpeedX = 0.01;
var rotationSpeedY = 0.01;
var rotationSpeedZ = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x -= rotationSpeedX/2;
console.log(myOtherBox.object3D.rotation.X);
myOtherBox.object3D.rotation.y -= rotationSpeedY/2;
console.log(myOtherBox.object3D.rotation.y);
myOtherBox.object3D.rotation.y -= rotationSpeedZ/2;
console.log(myOtherBox.object3D.rotation.z);
}

setInterval(spin, 16); //equivalent to 60 fps
