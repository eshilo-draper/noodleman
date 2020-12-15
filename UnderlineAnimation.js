function underlineIn(chapNum) {
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 0.png")';}, 25);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 1.png")';}, 50);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 2.png")';}, 75);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 3.png")';}, 100);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 4.png")';}, 125);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 5.png")';}, 150);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 6.png")';}, 175);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 7.png")';}, 200);
}

function underlineOut(chapNum) {
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 7.png")';}, 25);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 6.png")';}, 50);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 5.png")';}, 75);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 4.png")';}, 100);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 3.png")';}, 125);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 2.png")';}, 150);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 1.png")';}, 175);
	setTimeout(function(){document.getElementById('underline' + chapNum).style.backgroundImage = 'url( "images/underline/frame 0.png")';}, 200);
}
