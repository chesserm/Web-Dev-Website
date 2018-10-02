function doFirst()
{
	var btn = document.getElementById("button");
	btn.addEventListener("click", saveCrap, false);
	
	var clear = document.getElementById("clear");
	clear.addEventListener("click", clearSave);
	
	display();
}

function clearSave()
{
	sessionStorage.clear();
	var  rb = document.getElementById("rightbox");
	rb.innerHTML = "";
	
}

function saveCrap()
{
	//Gets just the value of the element and stores it in "one" instead of the whole element
	var boxOne = document.getElementById("textBoxOne").value;
	var boxTwo = document.getElementById("two").value;
	
	//Built in HTML5 class and function - the function takes in (key, value)
	//This stores this data on the user's computer
	sessionStorage.setItem(boxOne, boxTwo);
	
	display();
	document.getElementbyId("textBoxOne").value = "";
	document.getElementbyId("two").value = "";
}

function display()
{
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	
	for(var x = 0; x < sessionStorage.length; ++x)
	{
		//Getting the key at sessionStorage's index of "a"
		var a = sessionStorage.key(x);
		// Getting the value mapped to the "a" key
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += "Key: " + a + "<br /> Value: " + b + "<br />";
	}
}


window.addEventListener("load", doFirst, false);