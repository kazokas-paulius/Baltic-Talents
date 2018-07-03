function calc(){
    var fNum = document.getElementById("first").value;
    var sNum = document.getElementById("second").value;

    var fxs = fNum * sNum;
    document.getElementById("fxs").value = fxs;
    document.getElementById("formula").innerHTML = '<p id="formula"> Formulė: '+ fNum +' * '+ sNum +' = '+ fxs +'.</p>';
}
