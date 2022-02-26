//появление 1-го поп-апа
document.getElementById("elastic").onclick = function (){
    var theMenu = document.getElementById("myMenu");
    if(theMenu.style.display == 'none') {
        theMenu.style.display = 'block';
    }
    else {
        theMenu.style.display = 'none';
    }
}

//появление 2-го поп-апа
document.getElementById("wheretogo").onclick = function (){
    var theMenu = document.getElementById("myMenu2");
    if(theMenu.style.display == 'none') {
        theMenu.style.display = 'block';
    }
    else {
        theMenu.style.display = 'none';
    }
}

//сортировка 1-го поп-апа
document.querySelector("#elastic").oninput = function (search){
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll('.elastic li');
  if (val != '') {
      elasticItems.forEach(function (elem) {
          if (elem.innerText.search(val) == -1){
              elem.classList.add('hide');
          }
          else {
               elem.classList.remove('hide');
          }
      });
  }
  else {
      elasticItems.forEach(function (elem) {
          elem.classList.remove('hide');
      });
  }
}

//сортировка 2-го поп-апа
document.querySelector("#wheretogo").oninput = function (search){
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll('.elastic2 li');
  if (val != '') {
      elasticItems.forEach(function (elem) {
          if (elem.innerText.search(val) == -1){
              elem.classList.add('hide');
          }
          else {
               elem.classList.remove('hide');
          }
      });
  }
  else {
      elasticItems.forEach(function (elem) {
          elem.classList.remove('hide');
      });
  }
}

//вписывание слов в input
function insert (word) {
    let inp = document.querySelector('#elastic');
    let start = inp.selectionStart;
    inp.value = inp.value.substring(0, start) + word +
      inp.value.substring(inp.selectionEnd, inp.value.length) 
      inp.focus();
      inp.setSelectionRange(start, start + word.length)
  }

//вписывание слов в input
function insert2 (word) {
    let inp = document.querySelector('#wheretogo');
    let start = inp.selectionStart;
    inp.value = inp.value.substring(0, start) + word +
      inp.value.substring(inp.selectionEnd, inp.value.length) 
      inp.focus();
      inp.setSelectionRange(start, start + word.length)     
}

//меняет местами значения input-ов
document.getElementById("switch").onclick = function (){
    [
      document.getElementById("elastic").value,
      document.getElementById("wheretogo").value
    ] = [
      document.getElementById("wheretogo").value,
      document.getElementById("elastic").value
    ];
};


var expr = document.getElementById("findbutton").onclick = function() {
switch (expr) {
    case "Латвия(LV)":
      window.location.href = 'countries/Latvia.html-url' ;
      break;
    case "Испания(S)":
      window.location.href = 'countries/Spain.html-url' ;
      break;
    case "США(US)":
      window.location.href = 'countries/USA.html-url';
      break;
    case "Нидерланды(NL)":
      window.location.href = 'countries/Netherlands.html-url';
      break;
    case "Норвегия(NO)":
      window.location.href = 'countries/Norway.html-url';
      break;
    case "Румыния(RO)":
      window.location.href = 'countries/Romania.html-url';
      break;
    case "Россия(RU)":
      window.location.href = 'countries/Russia.html-url';
      break;
    default:
      console.log("Sorry, we are out of " + expr + ".");
  }
  
  console.log("Is there anything else you'd like?");
}

document.getElementById("ienakt").addEventListener("click", () => {
  let popUp = document.getElementById("popUp");
  popUp.style.display = "block";
});

let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "100px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}