document.getElementById("arg1").addEventListener("input", calc);
document.getElementById("arg2").addEventListener("input", calc);
document.getElementById("arg3").addEventListener("input", calc);

function calc() {

	var div_result = document.getElementById('result');
	var diametras_cm = document.getElementById('arg1').value * 2.54;
	var Padanga_cm = document.getElementById('arg2').value /10;
	var arka_cm = document.getElementById('arg3').value;
	var result = diametras_cm + 2* Padanga_cm;
	div_result.innerHTML = result + "cm";

	if (result > arka_cm) {
	div_result.style.backgroundColor = "red";
}	else {
	div_result.style.backgroundColor = "green";
}
}	

function add() {
	var table = document.getElementById("tr");
	var diametras_in = document.getElementById('arg1').value;
	var Padanga_mm = document.getElementById('arg2').value;
	var diametras_cm = document.getElementById('arg1').value * 2.54;
	var Padanga_cm = document.getElementById('arg2').value /10;
	var arka_cm = document.getElementById('arg3').value;
	var result = diametras_cm + 2* Padanga_cm;
	var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = diametras_in;
    cell2.innerHTML = Padanga_mm;
    cell3.innerHTML = result;
    cell4.innerHTML = arka_cm;
	
}

function del() {
    document.getElementById("tr").deleteRow(0);
}



