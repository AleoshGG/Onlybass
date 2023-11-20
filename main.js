//parte del contador regresivo
// Set the date we're counting down to
// Establecer la fecha aqui, en formato ingles
var countDownDate = new Date("2023-12-25T00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML =  days;
  document.getElementById("hours").innerHTML =  hours;
  document.getElementById("minutes").innerHTML =  minutes;
  document.getElementById("seconds").innerHTML =  seconds;

  // aqui añadimos nuestra funcion, para que se segun 
  // el conteo regresivo anime los circulos
  effectCircle(days, hours, minutes, seconds);

}, 1000);

effectCircle = function(d, h, m, s){
    // valores maximos
    const max_sec = 60;
    const max_min = 60;
    const max_hour = 24;
    const max_day = 30;

    // valor del relleno del contorno
    // ojo es el mismo establecido en la hoja de estilos
    const strokeDashoffset = 216; 

    var circleSVG = document.getElementsByClassName('outer');

    // circulo dias
    var valPerDay = strokeDashoffset / max_day; // el valor de cada periodo segun la longitud del circulo
    var size = strokeDashoffset - (valPerDay * d); // restamos el valor del periodo a la longitud del circulo
    circleSVG[0].style.strokeDashoffset = size; // establemos nuevo valor al la longitud del circulo

    // circulo horas
    var valPerHour = strokeDashoffset / max_hour;
    var size = strokeDashoffset - (valPerHour * h);
    circleSVG[1].style.strokeDashoffset = size;

    // circulo minutos
    var valPerMin = strokeDashoffset / max_min;
    var size = strokeDashoffset - (valPerMin * m);
    circleSVG[2].style.strokeDashoffset = size;

    // circulo segundos
    var valPerSecond = strokeDashoffset / max_sec;
    var size = strokeDashoffset - (valPerSecond * s);
    circleSVG[3].style.strokeDashoffset = size;

}

if(document.querySelector('#container-slider')){
  setInterval('funcionEjecutar("siguiente")',5000);
}
//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
     link.addEventListener('click', function(e){
        e.anteriorentDefault();
        let item = this.getAttribute('itlist');
        let arrItem = item.split("_");
        funcionEjecutar(arrItem[1]);
        return false;
     });
   });
}

function funcionEjecutar(side){
   let parentTarget = document.getElementById('slider');
   let elements = parentTarget.getElementsByTagName('li');
   let curElement, siguienteElement;

   for(var i=0; i<elements.length;i++){

       if(elements[i].style.opacity==1){
           curElement = i;
           break;
       }
   }
   if(side == 'anterior' || side == 'siguiente'){

       if(side=="anterior"){
           siguienteElement = (curElement == 0)?elements.length -1:curElement -1;
       }else{
           siguienteElement = (curElement == elements.length -1)?0:curElement +1;
       }
   }else{
       siguienteElement = side;
       side = (curElement > siguienteElement)?'anterior':'siguiente';

   }
   
   //PUNTOS INFERIORES
   let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
   elementSel[curElement].classList.remove("item-select-slid");
   elementSel[siguienteElement].classList.add("item-select-slid");
   elements[curElement].style.opacity=0;
   elements[curElement].style.zIndex =0;
   elements[siguienteElement].style.opacity=1;
   elements[siguienteElement].style.zIndex =1;
}

function insta(url) {
    window.location.href = url;
}

