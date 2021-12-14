let boyut=16;
const grid=document.querySelector('#container');
// grid.setAttribute(`draggable`,"false");

// Arayüz Hakkında
let leftMouse = false;
let MouseVar = false; 
let TouchVar = false;
// window.onmousemove = mouseKontrolEt;

// function mouseKontrolEt(){
//   MouseVar = true;
//   console.log(MouseVar);
// }

window.ontouchstart = touchKontrolEt;

function touchKontrolEt(){
  TouchVar = true;
  console.log(TouchVar);
}

for (let i = 0; i < boyut; i++) {
    let pikselSatiri = document.createElement('div');
    pikselSatiri.classList.add('pikselSatiri');
    pikselSatiri.classList.add('unselectable');
    pikselSatiri.setAttribute(`draggable`,"false");
    for (let j = 0; j < boyut; j++) {
        let pikselKutusu = document.createElement('div');
        pikselKutusu.classList.add('pikselKutusu');
        pikselKutusu.classList.add('unselectable');
        pikselKutusu.setAttribute(`draggable`,"false");
        pikselSatiri.appendChild(pikselKutusu);
    }
    grid.appendChild(pikselSatiri);
}


const pikseller = document.querySelectorAll('.pikselKutusu');

// we use the .forEach method to iterate through each button
pikseller.forEach((piksel) => {
  // and for each one we add a 'click' listener
  piksel.addEventListener('mousedown', ciz);
  piksel.addEventListener('mouseover', ciz2);
  // piksel.addEventListener('touchstart', ciz);
  piksel.addEventListener('mouseup', dur);
});

grid.addEventListener('mouseleave', dur);

function ciz(e) {
  e.target.style.cssText=`background-color:black`;
  leftMouse=true;
}
function ciz2(e) {
  // mouseKontrolEt();
  if (leftMouse || TouchVar){
  // if (leftMouse){
    ciz(e);
  }
}
function dur() {
    leftMouse=false;
}

// https://stackoverflow.com/a/48970682


// function setLeftButtonState(e) {
//   leftMouseButtonOnlyDown = e.buttons === undefined 
//     ? e.which === 1 
//     :(e.buttons & 1) === 1;
// }

// document.body.onmousedown = setLeftButtonState;
// document.body.onmousemove = setLeftButtonState;
// document.body.onmouseup = setLeftButtonState;


// https://stackoverflow.com/questions/7838680/detecting-that-the-browser-has-no-mouse-and-is-touch-only