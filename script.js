function calc(){
	var div_result = document.getElementById('result');
	var input_arg1 = document.getElementById('arg1');
	var input_arg2 = document.getElementById('arg2');
	var input_operation = document.getElementById('operation');
	var arg1 = parseInt(input_arg1.value) || 0 ;
	var arg2 = parseInt(input_arg2.value) || 0 ;
	var result;
	if (input_operation.value == "sudeti") {
	result = arg11 + arg21;
} else if (input_operation.value == "atimtis") {
	result = arg11 - arg21;
}	else if (input_operation.value == "dalyba") {
	result = arg11 / arg21;
}	else if (input_operation.value == "daugyba") {
	result = arg11 * arg21;
}if (input_arg3) {
	var div_result = document.getElementById('result');
	var diametras_cm = document.getElementById('arg1').value * 2.54;
	var Padanga_cm = document.getElementById('arg2').value /10;
	var arka_cm = document.getElementById('arg3').value;
	var result = input_arg1 + 2* input_arg2;
	div_result.innerHTML = result + "cm";


	if (result > input_arg3) {
	div_result.style.backgroundColor = "red";
}	else {
	div_result.style.backgroundColor = "green";
}
}	if (result < 0) {
	div_result.style.backgroundColor = "green";
} else if {
	var arg1 = arg1 / 2;
}	else {
	div_result.style.backgroundColor = "red";
	div_result.innerHTML = "Negalima";
}
	
document.getElementById('result').innerHTML = result;

}