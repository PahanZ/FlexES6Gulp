'use strict';

//================================Burger menu================= 

var button = document.getElementsByTagName('button')[0];
button.onclick = function () {
	var div = document.getElementsByClassName('burger');
	[].forEach.call(div, function (i) {
		i.classList.toggle('burgerOpen');
	});
	var ul = document.getElementsByTagName('ul')[0];
	ul.classList.toggle('open');
};

//================================ScrollTop button================= 

var scrollTop = document.getElementById('scrollTop');
scrollTop.onclick = function (event) {
	var x = 0;
	var pos = window.pageYOffset;
	event.preventDefault();
	setInterval(function () {
		if (x <= pos) {
			pos -= 25;
			window.scrollTo(0, pos);
		}
	}, 10);
};

window.onscroll = function () {
	var style = scrollTop.style;
	if (this.pageYOffset > 250) {
		style.width = 45 + 'px';
		style.height = 40 + 'px';
		style.padding = 10 + 'px';
		style.opacity = 1;
	} else {
		style.width = 0 + 'px';
		style.height = 0 + 'px';
		style.padding = 0 + 'px';
		style.opacity = 0;
	}
};

//================================Navigation================= 

var a = document.getElementsByClassName('nav');
[].forEach.call(a, function (i) {
	i.onclick = function (event) {
		var x = 0;
		event.preventDefault();
		var atr = this.getAttribute('href');
		var splitatr = atr.split('#');
		atr = document.getElementById(splitatr[1]).offsetTop;
		setInterval(function () {
			if (x <= atr) {
				x += 25;
				window.scrollTo(0, x);
			}
		}, 10);
	};
});