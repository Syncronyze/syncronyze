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
	document.getElementById("finished-projects").style.display = "none";
	document.getElementById("surf-projects").style.display = "none";
	document.getElementById("demos").style.display = "none";
	document.getElementById(divToToggle).style.display = "block";
}