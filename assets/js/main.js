document.addEventListener("DOMContentLoaded", function() {
	new SweetScroll({});
	//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_snackbar
	if(window.location.search.substr(1) === "success=true"){
		var x = document.getElementById("snackbar");
	    x.className = "show";
	    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	} 
}, !1);

function toggleDiv(divToToggle){
	var finproj = document.getElementById('finished-projects');
	var surfproj = document.getElementById('surf-projects');
	var demos = document.getElementById('demos');
	var toshow = document.getElementById(divToToggle);

	finproj.display.style = 'hidden';
	surfproj.display.style = 'hidden';
	demos.display.style = 'hidden';
	toshow.display.style = 'block';
}