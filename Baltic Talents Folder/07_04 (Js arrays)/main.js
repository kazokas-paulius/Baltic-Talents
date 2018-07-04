function ranData(){
    var year = Math.ceil(Math.random() * (2018 - 1990)) + 1990;
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var sRanMonth = Math.floor(Math.random() * months.length);
    var ranMonth = months[sRanMonth];
    var days = Math.ceil(Math.random() * 31);
    var hours = Math.ceil(Math.random() * 23);
    if(hours < 10){
        hours = "0" + hours;
    }
    var mins = Math.floor(Math.random() * 59);
    if(mins < 10){
        mins = "0" + mins;
    }
    var secs  = Math.floor(Math.random() * 59);
    if(secs < 10){
        secs = "0" + secs;
    }
    var date = year + " " + ranMonth + " " + days + "th " + hours + ":" + mins + ":" + secs;
    return date;
}
function ranCarNum(){
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var carLett = "";
    for (var i = 0; i < 3; i++){
        carLett += abc.charAt(Math.floor(Math.random() * abc.length));
    }
    var num = "0123456789";
    var carNumb = "";
    for (var i = 0; i < 3; i++){
        carNumb += num.charAt(Math.floor(Math.random() * num.length));
    }
    var carPlate = carLett + carNumb;
    return carPlate;
}
function ranDis(){
    var dis = Math.ceil(Math.random() * (((Math.random() * 100) + 10) + ((Math.random() * 199) + 101)));
    return dis;
}
function ranTim(){
    var getDis = ranDis();
    // const oneMs = Math.ceil(Math.random() * 3) + 1;

    //var setTim = getDis * oneMs;
    var setTim = Math.ceil(Math.random() * 100) + 20;
    return setTim;
}
function gen(){
    var date = ranData();
    var cPlt = ranCarNum();
    var cDis = ranDis();
    var cTim = ranTim();

    var rDis = cDis / 1000;
    var rTim = cTim / 3600;
    var cSpee = rDis / rTim;
    var rSpee = cSpee.toFixed(2);
    //alert("Date: " + date + "\nCar Number: " + cPlt + "\nDistance: " + cDis + " (metres)\nTime: " + cTim + " (seconds)" + "\nSpeed: " + rSpee + " km/h");

    var tbl = document.getElementById('genTable');
    tbl.style.visibility = "visible";
    tbl.style.border = "1px solid rgb(15, 15, 15)";
    document.getElementById('ovwDate').innerHTML = date;
    document.getElementById('ovwCarPlate').innerHTML = cPlt;
    document.getElementById('ovwDistance').innerHTML = cDis;
    document.getElementById('ovwTime').innerHTML = cTim;
    document.getElementById('ovwSpeed').innerHTML = rSpee;
}
