<!DOCTYPE html>
<html>
<head>
	<title>Skaičiuotuvas</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

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
		<input  class="form-control" type="text" id="arg1" >
		<input  class="form-control" type="text" id="arg2" >
		<select  class="form-control" id="operation">
			<option value="sudeti">+</option>
			<option value="atimtis">-</option>
			<option value="dalyba">/</option>
			<option value="daugyba">*</option>
			<option value="ratas">Ratas</option>
		</select>
		</div>
	</div>
</div>
<script src="script.js"></script>
</body>

</html>