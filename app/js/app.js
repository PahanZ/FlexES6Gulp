//================================Burger menu================= 

let button = document.getElementsByTagName('button')[0];
button.onclick = function () {
	let div = document.getElementsByClassName('burger');
		[].forEach.call(div, (i) => {
			i.classList.toggle('burgerOpen');
		})
	let ul = document.getElementsByTagName('ul')[0];
		ul.classList.toggle('open');
}

//================================ScrollTop button================= 

let scrollTop = document.getElementById('scrollTop');
scrollTop.onclick = function (event) {
	let x = 0;
	let pos = window.pageYOffset;
	event.preventDefault();
	setInterval(() => {
		if (x <= pos) {
			pos-=25;
			window.scrollTo(0, pos);
		}
	},10)
};

window.onscroll = function () {
	let style = scrollTop.style;
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
}

//================================Navigation================= 

let a = document.getElementsByClassName('nav');
	[].forEach.call(a, function (i) {
		i.onclick = function (event) {
		let x = 0;
		event.preventDefault();
		let atr = this.getAttribute('href');
		let splitatr = atr.split('#');
		atr = document.getElementById(splitatr[1]).offsetTop;
		setInterval( () => {
			if (x <= atr) {
				x+=25;
				window.scrollTo(0, x);
			}
		},10)		
		}
	})