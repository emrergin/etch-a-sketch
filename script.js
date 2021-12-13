let boyut=16;
const grid=document.querySelector('#container');

for (let i = 0; i < boyut; i++) {
    let pikselSatiri = document.createElement('div');
    pikselSatiri.classList.add('pikselSatiri');
    for (let j = 0; j < boyut; j++) {
        let pikselKutusu = document.createElement('div');
        pikselKutusu.classList.add('pikselKutusu');
        pikselSatiri.appendChild(pikselKutusu);
    }
    grid.appendChild(pikselSatiri);
}


const pikseller = document.querySelectorAll('.pikselKutusu');

// we use the .forEach method to iterate through each button
pikseller.forEach((piksel) => {
  // and for each one we add a 'click' listener
  piksel.addEventListener('click', ciz);
  piksel.addEventListener('mousedown', ciz);
});

function ciz() {
  this.style.cssText=`background-color:black`;
  // let prevColor = window.getComputedStyle(this).backgroundColor;
  // alert(prevColor);
}
