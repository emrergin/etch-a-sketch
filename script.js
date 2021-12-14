let boyut=16;
const grid=document.querySelector('#container');
grid.setAttribute(`draggable`,"false");

for (let i = 0; i < boyut; i++) {
    let pikselSatiri = document.createElement('div');
    pikselSatiri.classList.add('pikselSatiri');
    pikselSatiri.setAttribute(`draggable`,"false");
    for (let j = 0; j < boyut; j++) {
        let pikselKutusu = document.createElement('div');
        pikselKutusu.classList.add('pikselKutusu');
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
//   ['click','ontouchstart'].forEach( evt => 
//     piksel.addEventListener(evt, ciz2)
// );
});

function ciz(e) {
  e.target.style.cssText=`background-color:black`;
}
function ciz2(e) {
  if (leftMouseButtonOnlyDown){
    ciz(e);
  }
}

// https://stackoverflow.com/a/48970682
var leftMouseButtonOnlyDown = false;

function setLeftButtonState(e) {
  leftMouseButtonOnlyDown = e.buttons === undefined 
    ? e.which === 1 
    :(e.buttons & 1) === 1;
}

document.body.onmousedown = setLeftButtonState;
document.body.onmousemove = setLeftButtonState;
document.body.onmouseup = setLeftButtonState;
