function calc(){
    var sqHeight = document.getElementById("heightID").value;
    var sqWidth = document.getElementById("widthID").value;

    var plotas = sqHeight * sqWidth;
    document.getElementById("plotasID").innerHTML = plotas;
    var perimetras = sqHeight * 2 + sqWidth * 2;
    document.getElementById("perimetrasID").innerHTML = perimetras;
    var istrizaine = parseFloat(Math.sqrt(Math.pow(sqHeight, 2) + Math.pow(sqWidth, 2)).toFixed(2));
    document.getElementById("istrizaineID").innerHTML = istrizaine;
}
