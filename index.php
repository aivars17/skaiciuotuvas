<!DOCTYPE html>
<html>
<head>
	<title>Skaičiuotuvas</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<script src="script.js"></script>

</head>
<body>
	<div class="container">
	<h1>JavaScript skaičiuotuvas</h1>

	</div>
	<div class="row">
		<div class="col">
			<div class="col" id="result">none</div>
		</div>
		<div class="col">
		<input onkeyup="calc()" class="form-control" type="text" id="arg1" >
		<input onkeyup="calc()" class="form-control" type="text" id="arg2" >
		<select onchange="calc()" class="form-control" id="operation">
			<option value="sudeti">+</option>
			<option value="atimtis">-</option>
			<option value="dalyba">/</option>
			<option value="daugyba">*</option>
		</select>
		</div>
	</div>
</div>
</body>
</html>