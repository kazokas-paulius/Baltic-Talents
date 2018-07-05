function ranCalc(){
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    var c = Math.floor(Math.random() * 10) + 1;

    var a2 = Math.pow(a, 2);
    var b2 = Math.pow(b, 2);
    var c2 = Math.pow(c, 2);
    var res = '';

    var p = (a + b + c) / 2;
    var area = Math.sqrt(p * (p - a)*(p - b)*(p - c));

    if(area <= 0 || isNaN(area)){
        res = 'A:' + a + ' B:' + b + ' C:' + c + ' Area: ' + area + ' Not a triangle';
        document.getElementById('result').innerHTML = res;
    }
    else if(a == 0 || b == 0 || c == 0){
        res = 'A:' + a + ' B:' + b + ' C:' + c + ' Area: ' + parseFloat(area).toFixed(2) + ' Error: values equal 0. Generate again.';
        document.getElementById('result').innerHTML = res;
    }
    else if(a <= 0 || b <= 0 || c <= 0){
        res = 'A:' + a + ' B:' + b + ' C:' + c + ' Area: ' + parseFloat(area).toFixed(2) + ' Error: values are lower than 0. Generate again.';
        document.getElementById('result').innerHTML = res;
    }
    else if(a != b && b != c && c != a){
        res = 'A:' + a + ' B:' + b + ' C:' + c + ' Area: ' + parseFloat(area).toFixed(2) + ' Versatile Triangle.';
        document.getElementById('result').innerHTML = res;
    }
    else if(a == b && b == c && c == a){
        res = 'A:' + a + ' B:' + b + ' C:' + c + 'Area: ' + parseFloat(area).toFixed(2) + ' Equilateral (1) Triangle.';
        document.getElementById('result').innerHTML = res;
    }
    else if(a == b && b == c || b == c && c == a || a == c && c == a){
        res = 'A:' + a + ' B:' + b + ' C:' + c + ' Area: ' + parseFloat(area).toFixed(2) + ' Equilateral (2) Triangle.';
        document.getElementById('result').innerHTML = res;
    }
    else if(Math.max(a2, b2, c2) == (a2 + b2 + c2) - Math.max(a2, b2, c2)){
        res = 'A:' + a + ' B:' + b + ' C:' + c + ' Area: ' + parseFloat(area).toFixed(2) + ' Right Triangle.';
        document.getElementById('result').innerHTML = res;
    }

    var div = document.createElement('div');
    var divContent = document.createTextNode(res);
    div.appendChild(divContent);
    var firstResult = document.getElementById('result');
    document.body.insertBefore(div, firstResult);
}
