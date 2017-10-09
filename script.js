function calc(){
	var div_result = document.getElementById('result');
	var input_arg1 = document.getElementById('arg1');
	var input_arg2 = document.getElementById('arg2');
	var input_operation = document.getElementById('operation');
	var arg11 = parseInt(input_arg1.value) || 0 ;
	var arg21 = parseInt(input_arg2.value) || 0 ;
	if (input_operation.value == "sudeti") {
	div_result.innerHTML = arg11 + arg21;
} else if (input_operation.value == "atimtis") {
	div_result.innerHTML = arg11 - arg21;
}	else if (input_operation.value == "dalyba") {
	div_result.innerHTML = arg11 / arg21;
}	else if (input_operation.value == "daugyba") {
	div_result.innerHTML = arg11 * arg21;
}	else {
	document.getElementById('result').innerHTML = "nezinoma operacija";
}

}