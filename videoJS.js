function doFirst() 
{
	// This is the default bar width in pixels (used below in the update function)
	barSize = 600;
	
	// Gets the elements from the HTML file using their id (note you don't include the "#" like you do in CSS
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	bar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');


	playButton.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);
	
	
}

function playOrPause() 
{
	if (!myMovie.paused && !myMovie.ended)
	{
		// Built in JavaScript function that will pause an HTML video
		myMovie.pause();
		
		// Change text on button to Play
		playButton.innerHTML = 'Play';
		
		// This stops the interval that updates the progress bar's width as the video plays
		window.clearInterval(updateBar);
	} 
	else 
	{
		// Built in JavaScript function
		myMovie.play();
		playButton.innerHTML = 'Pause';
		
		// The first parameter is the function to call, and the second parameter is the frequency in milliseconds
		updateBar = setInterval(update, 500);
	}
	
}

function update() 
{
	if (!myMovie.ended)
	{
		// Updating the progress bar's width 
		var size = parseInt(myMovie.currentTime * barSize / myMovie.duration);
		progressBar.style.width = size + 'px';
		
	}
	else
	{
		progressBar.style.width = '0px';
		playButton.innerHTML = 'Play';
		window.clearInterval(updateBar);
	}
	
}

// Parameter will be the position of the mouse
function clickedBar(e)
{
	if (!myMovie.ended)
	{
		//Finds the location of the mouse on the progress bar and then plays the video from that point
		var mouseX = e.pageX-bar.offsetLeft;
		var newTime = mouseX * myMovie.duration / barSize;
		myMovie.currentTime = newTime;
		progressBar.style.width = mouseX + 'px';
		
		if (myMovie.paused)
		{
			myMovie.play();
			playButton.innerHTML = 'Pause';
		}
	}

	
}


window.addEventListener('load', doFirst, false);