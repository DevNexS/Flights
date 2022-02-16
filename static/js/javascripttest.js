document.querySelector("#elastic").oninput = function (search){
    let val = this.value.trim();
    console.log('Привет от JavaScript!');
    let elasticItems = document.querySelectorAll('#elastic li');
    if (val != ''){
      elasticItems.forEach(function (elem){
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
        elem.classList.add('hide');
      });
    }
  }