function talk()
{
	alert("Hello!");
	
}

function yell()
{
	alert("HELLO!");
}

function getStuff()
{
	// This selects everything within the document with an id of "firstp" and returns the first element
	document.querySelector("#secondp").onclick=yell;
	
}

function getEverything()
{
	var list = document.querySelectorAll(".myP");
	list[0].onclick=talk;
	list[2].onclick=talk;
}

function pleaseLoad()
{
	getStuff();
	getEverything();
}

window.onload = pleaseLoad;
