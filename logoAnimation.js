function setFrame(frame) {
	document.getElementById('big').src = 'images/banner/frame ' + frame + '.jpg';
}
function animateOut() {
	setTimeout(function(){setFrame(1);}, 50);
	setTimeout(function(){setFrame(2);}, 100);
	setTimeout(function(){setFrame(3);}, 150);
	setTimeout(function(){setFrame(4);}, 200);
	setTimeout(function(){setFrame(5);}, 250);
	setTimeout(function(){setFrame(6);}, 300);
	setTimeout(function(){setFrame(7);}, 350);
}
function animateIn() {
	setTimeout(function(){setFrame(7);}, 50);
	setTimeout(function(){setFrame(6);}, 100);
	setTimeout(function(){setFrame(5);}, 150);
	setTimeout(function(){setFrame(4);}, 200);
	setTimeout(function(){setFrame(3);}, 250);
	setTimeout(function(){setFrame(2);}, 300);
	setTimeout(function(){setFrame(1);}, 350);
}