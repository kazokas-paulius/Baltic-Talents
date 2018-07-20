function createP(){
    var data = ['ID','Name','Lastname','Age'];
    // data.pop();
    data.push('Sex','Address','Country');
    // document.getElementById("result").innerHTML = data.join(' ');
    var p = document.createElement('p');
    p.setAttribute("id", "createP");
    var p_content = document.createTextNode(data);
    p.appendChild(p_content);
    p.style.backgroundColor = "rgb(248, 248, 248)";
    p.style.fontSize = "30px";
    document.body.appendChild(p);
}
function createTable(){
    var data = [
        ['1', '1037215', 'Paul Leonard', 'Vilnius', 'Lithuania', 'Mercedes Benz', 'Private House'],
        ['2', '1170102', 'Juan Pedro', 'Madrid', 'Spain', 'Volkswagen', 'City Apps'],
        ['3', '1211427', 'Francesca Amenor', 'Paris', 'France', 'Audi', 'Countryside House'],
        ['4', '1396725', 'Angelina Doe', 'New York', 'United States', 'BMW', 'City Apps'],
        ['5', '1467321', 'Eduardo Bonaparte', 'Milan', 'Italy', 'Opel', 'City Apps']
    ];
    for(var i = 0; i < data.length; i++){
        var tr = document.createElement("tr");
        for(var j = 0; j < data[i].length; j++){
            var td = document.createElement("td");
            td.style.backgroundColor = "rgb(200, 200, 200)";
            td.textContent = data[i][j];
            tr.append(td);
            document.querySelector("#table_info").appendChild(tr);
        }
    }
}
