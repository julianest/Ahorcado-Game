const contLetters = document.getElementById("containerLetters");
const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

dibujar();
function dibujar() {
  const board = document.querySelector("canvas");
  const pencil = board.getContext("2d");
  head();
  body();
  leftLeg();
  rightLeg();
  leftArm();
  rightArm();
  machine();
  function head() {
    pencil.fillStyle = "#EED09D";
    pencil.arc(300, 100, 30, 0, 8 * Math.PI);
    pencil.fill();
  }
  function limpiarPantalla() {
    pencil.clearRect(0, 0, 600, 400);
  }
  function body() {
    pencil.fillRect(295, 100, 10, 150);
    pencil.fill();
  }
  function leftLeg() {
    pencil.beginPath();
    pencil.strokeStyle = "#EED09D";
    pencil.lineWidth = "9";
    pencil.moveTo(300, 240);
    pencil.lineTo(250, 300);
    pencil.stroke();
    pencil.closePath();
  }
  function rightLeg() {
    pencil.beginPath();
    pencil.strokeStyle = "#EED09D";
    pencil.lineWidth = "9";
    pencil.moveTo(350, 300);
    pencil.lineTo(300, 240);
    pencil.stroke();
    pencil.closePath();
  }
  function leftArm() {
    pencil.beginPath();
    pencil.strokeStyle = "#EED09D";
    pencil.lineWidth = "9";
    pencil.moveTo(300, 150);
    pencil.lineTo(250, 200);
    pencil.stroke();
    pencil.closePath();
  }
  function rightArm() {
    pencil.beginPath();
    pencil.strokeStyle = "#EED09D";
    pencil.lineWidth = "9";
    pencil.moveTo(350, 200);
    pencil.lineTo(300, 150);
    pencil.stroke();
    pencil.closePath();
  }

  function machine() {
    //base
    pencil.beginPath();
    pencil.strokeStyle = "#804000";
    pencil.lineWidth = "9";
    pencil.moveTo(50, 380);
    pencil.lineTo(400, 380);
    pencil.stroke();
    pencil.closePath();
    //lamppost 1
    pencil.beginPath();
    pencil.strokeStyle = "#804000";
    pencil.lineWidth = "7";
    pencil.moveTo(100, 20);
    pencil.lineTo(100, 380);
    pencil.stroke();
    pencil.closePath();
    //lamppost 2
    pencil.beginPath();
    pencil.strokeStyle = "#804000";
    pencil.lineWidth = "7";
    pencil.moveTo(70, 20);
    pencil.lineTo(300, 20);
    pencil.stroke();
    pencil.closePath();
    //lamppost 3
    pencil.beginPath();
    pencil.strokeStyle = "#804000";
    pencil.lineWidth = "7";
    pencil.moveTo(300, 16);
    pencil.lineTo(300, 70);
    pencil.stroke();
    pencil.closePath();

    //lamppost ornament
    pencil.beginPath();
    pencil.strokeStyle = "#A56D5D";
    pencil.lineWidth = "7";
    pencil.moveTo(100, 100);
    pencil.lineTo(200, 20);
    pencil.stroke();
    pencil.closePath();
  }
}


renderLetters();

function renderLetters(){
  let html = "";
  const hoola = "hola";


  html += `<div><h2> ${hoola}</h2></div>`;
  contLetters.innerHTML = html;
}