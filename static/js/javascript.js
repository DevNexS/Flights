//меняет местами значения input-ов
document.getElementById("switch").onclick = function (){
    [
      document.getElementById("nokuriene").value,
      document.getElementById("wheretogo").value
    ] = [
      document.getElementById("wheretogo").value,
      document.getElementById("nokuriene").value
    ];
};

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