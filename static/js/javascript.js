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