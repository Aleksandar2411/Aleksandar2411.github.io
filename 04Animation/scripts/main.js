

// changing individual properties with code and using setInterval
var rotationSpeedX = 5;
var rotationSpeedY = 5;
var rotationSpeedZ = 5;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x -= rotationSpeedX;
console.log(myOtherBox.object3D.rotation.X);
myOtherBox.object3D.rotation.y -= rotationSpeedY;
console.log(myOtherBox.object3D.rotation.y);
myOtherBox.object3D.rotation.y -= rotationSpeedZ;
console.log(myOtherBox.object3D.rotation.z);
}

setInterval(spin, 16); //equivalent to 60 fps
