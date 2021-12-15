let boyut=16;
const grid=document.querySelector('#container');
let boyutCubugu = document.getElementById("pikselSayisi");
const boyutyazi=document.querySelector('#boyutMetin');
const btext=boyutyazi.textContent;
boyutyazi.textContent=btext+boyut;
const rbs = document.getElementsByName('mod');

// Arayüz Hakkında
let leftMouse = false;
let rightMouse = false;
function modSec(){
  let selectedValue;
  for (const rb of rbs) {
      if (rb.checked) {
          selectedValue = rb.value;
          return (selectedValue);
      }
  }
}
// let TouchVar = false;

// window.ontouchstart = touchKontrolEt;

// function touchKontrolEt(){
//   TouchVar = true;
// }


function tahtaOlustur(){
  tahtaTemizle();
  for (let i = 0; i < boyut; i++) {
    let pikselSatiri = document.createElement('div');
    pikselSatiri.classList.add('pikselSatiri');
    pikselSatiri.classList.add('unselectable');
    pikselSatiri.setAttribute(`draggable`,"false");
    for (let j = 0; j < boyut; j++) {
        let pikselKutusu = document.createElement('div');
        pikselKutusu.classList.add('pikselKutusu');
        pikselKutusu.classList.add('d0');
        pikselKutusu.classList.add('unselectable');
        pikselKutusu.setAttribute(`draggable`,"false");
        pikselKutusu.style.cssText=`width: ${100/boyut}%`
        pikselSatiri.appendChild(pikselKutusu);
  }
  grid.appendChild(pikselSatiri);
  }
  const pikseller = document.querySelectorAll('.pikselKutusu');

  pikseller.forEach((piksel) => {
    piksel.addEventListener('mousedown', ciz);
    piksel.addEventListener('mouseover', ciz2);
    piksel.addEventListener('click', ciz2);
    piksel.addEventListener('mouseup', dur);
    piksel.addEventListener("contextmenu", ( e )=> { e.preventDefault(); return false; } );
  });

function tahtaTemizle(){
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
  }
}

grid.addEventListener('mouseleave', dur);}

// MOUSEa basilmis
function ciz(e) {
  if (e.button===0){
    switch (modSec()){
      case 'default':
        e.target.classList.add(`d5`);
        e.target.classList.remove(`d0`,`d1`,`d2`,`d3`,`d4`);
        e.target.style.backgroundColor = "";
        break;
      case 'tedrici':
        for (let i = 5; i >0; i--) {
          if (e.target.classList.contains(`d${i-1}`))
          {
            e.target.classList.add(`d${i}`);
            e.target.classList.remove(`d${i-1}`);
          }
        }
        e.target.style.backgroundColor = "";
        break;
      case 'gokKusagi':
        e.target.style.cssText+=`background-color:rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        // e.target.classList.remove(`d0`,`d1`,`d2`,`d3`,`d4`,`d5`);
        break;
  }
    leftMouse=true;
  }
  if (e.button===2){
    rightMouse=true;
    sil(e);
  }
}

// SAG TIK CIZIMI = SILIMI
function sil(e){
  // ( e )=> { e.preventDefault(); return false; } 
  switch (modSec()){
    case 'default':
      e.target.classList.add(`d0`);
      e.target.classList.remove(`d5`,`d1`,`d2`,`d3`,`d4`);
      e.target.style.backgroundColor = "";
      break;
    case 'tedrici':
      for (let i = 1; i <6; i++) {
        if (e.target.classList.contains(`d${i}`))
        {
          e.target.classList.add(`d${i-1}`);
          e.target.classList.remove(`d${i}`);
        }
      }
      e.target.style.backgroundColor = "";
      break;
    case 'gokKusagi':
      e.target.style.backgroundColor=`rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
      // e.target.classList.remove(`d0`,`d1`,`d2`,`d3`,`d4`,`d5`);
      break;
  }
}

// BASILI TUTUP CIZMEK ICIN
function ciz2(e) {
  if (leftMouse){
    ciz(e);
  }
  if (rightMouse){
    sil(e);
  }
}
function dur() {
    leftMouse=false;
    rightMouse=false;
}

// Piksel sayisi ayari
boyutCubugu.oninput = function() {
  boyut = this.value;
  tahtaOlustur();
  boyutyazi.textContent=btext+boyut;
}


function temizle()
{
  tahtaOlustur();
}


tahtaOlustur();