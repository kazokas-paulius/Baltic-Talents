var aukstis = 20;
var plotis = 30;

document.getElementById("aukstis").innerHTML = aukstis;
document.getElementById("plotis").innerHTML = plotis;

var perimetras = aukstis * 2 + plotis * 2;
var plotas = aukstis * plotis;
var aukstine = Math.sqrt(aukstis * aukstis + plotis * plotis);

document.getElementById("perimetras").innerHTML = perimetras;
document.getElementById("plotas").innerHTML = plotas;
document.getElementById("aukstine").innerHTML = aukstine;
