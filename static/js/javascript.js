document.getElementById("showHide").onclick = function() {
    var theDiv = document.getElementsById("popUpInfo");
    if(theDiv.style.display == 'none') {
        theDiv.style.display = 'block';
        this.innerHTML = 'Hide';
    } else {
        theDiv.style.display = 'none';
        this.innerHTML = 'Show';
    }
}