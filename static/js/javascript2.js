document.getElementById("showHide").onclick = function() {
    var theDiv = document.getElementById("popUpInfo");
    if(theDiv.style.display == 'none') {
        theDiv.style.display = 'block';
    } 
    else {
        theDiv.style.display = 'none';
    }
}

$('#findtext').click(function() {
    window.location.href = '/some/new/page';
    return false;
});