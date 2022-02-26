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

function register() {
  document.getElementById("login").style.left = "-400px";
  document.getElementById("register").style.left = "50px";
  document.getElementById("btn").style.left = "100px";
  }

function login() {
  document.getElementById("login").style.left = "50px";
  document.getElementById("register").style.left = "450px";
  document.getElementById("btn").style.left = "0px";
}
function est() {
  document.getElementById("popUp").style.display = "block";
}

function net() {
  document.getElementById("popUp").style.display = "none";
}
function swap(){
  [document.getElementById("nokuriene").value, document.getElementById("wheretogo").value] = [document.getElementById("wheretogo").value, document.getElementById("nokuriene").value];
}