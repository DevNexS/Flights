// document.getElementById("showHide").onclick = function() {
//     var theDiv = document.getElementById("popUpInfo");
//     if(theDiv.style.display == 'none') {
//         theDiv.style.display = 'block';
//     } 
//     else {
//         theDiv.style.display = 'none';
//     }
// }

// $('#findtext').click(function() {
//     window.location.href = '/some/new/page';
//     return false;
// });

document.getElementById("elastic").onclick = function(){
    var theMenu = document.getElementById("myMenu");
    if(theMenu.style.display == 'none') {
        theMenu.style.display = 'block';
    }
    else {
        theMenu.style.display = 'none';
    }
}

document.getElementById("wheretogo").onclick = function(){
    var theMenu = document.getElementById("myMenu2");
    if(theMenu.style.display == 'none') {
        theMenu.style.display = 'block';
    }
    else {
        theMenu.style.display = 'none';
    }
}

function myFunction() {
    // Объявить переменные
    var input, filter, ul, li, a, i;
    input = document.getElementById("elastic");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
  
    // Прокрутите все элементы списка и скройте те, которые не соответствуют поисковому запросу
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }