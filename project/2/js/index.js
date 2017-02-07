window.onload = function(){
	var oSet = document.getElementById("set"),
		oUpArrow = document.getElementById("upArrow"),
		oUl = document.getElementById("ul"),
		time = null
	oSet.onmouseover = function(){
		if(time){
			clearTimeout(time);
		}
		oUpArrow.style.display = "block";
		oUl.style.display = "block";
	}
	oSet.onmouseout = function(){
		time = setTimeout(function(){
			oUpArrow.style.display = "none";
			oUl.style.display = "none";
		},200);
	}
}
