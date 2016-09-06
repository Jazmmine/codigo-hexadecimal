window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var color = document.getElementById("color").value;
		myFunction(color);
	});

	function myFunction(color) {
		setTimeout(function(){
			document.body.style.backgroundColor = color;}, 2000);
				}
});