function doFirst()
{
	mypic = document.getElementById('pic');
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
	
	leftBox = document.getElementById('leftbox');
	leftBox.addEventListener("dragenter", function(e) { e.preventDefault(); }, false);
	leftBox.addEventListener("dragover", function(e) { e.preventDefault(); }, false);
	leftBox.addEventListener("dragenter", dragEnter, false);
	leftBox.addEventListener("dragleave", dragLeave, false);
	leftBox.addEventListener("drop", dropPic, false);
	
	
	rightbox = document.getElementById('rightbox');
	
}

function dragEnter(e)
{
	e.preventDefault();
	leftbox.style.background = "SkyBlue";
	leftbox.style.border = "3px solid red";
}

function dragLeave(e)
{
	e.preventDefault();
	leftbox.style.background = "white";
	leftbox.style.border="3px solid blue";
	
}

//Hides the original picture once it's dragged to the other box (to make it more like a desktop application)
function endDrag(e)
{
	pic = e.target;
	pic.style.visibility = 'hidden';
}

function startDrag(e)
{
	var imgCode = '<img src="landscape.jpeg" width=200 height=100 id="pic" />';
	e.dataTransfer.setData('Text', imgCode);
	
}

function dropPic(e)
{
	e.preventDefault();
	leftBox.innerHTML = e.dataTransfer.getData('Text');
	
}



window.addEventListener("load", doFirst, false);