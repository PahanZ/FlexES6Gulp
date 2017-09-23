var button = document.getElementsByTagName('button')[0];
button.onclick = function () {
	var div = document.getElementsByClassName('burger');
		[].forEach.call(div, function(i){
			i.classList.toggle('burgerOpen');
		})
	var ul = document.getElementsByTagName('ul')[0];
		ul.classList.toggle('open');
}
var a = document.getElementsByTagName('a');
for (var i = 0; i < a.length; i++) {
	a[i].onclick = function (event) {
		event.preventDefault();
		// var atr = this.getAttribute('href');
		var atr = event.target.href;
		console.log(atr)
		// var splitatr = atr.split(',');
		// console.log(splitatr)
		// // var top = splitatr.clientY;
		// console.log(atr)
		// // console.log(window.scrollTo(0, splitatr)	)



		// var y = 0;
		// var x = 300;
		// setInterval(function() {
		// 	if (y!= x) {
		// 		y+=5;
		// 		window.scrollTo(0, y)		
		// 	// console.log(y)
		// 	}
		// },1)
	}
	
}




var first = document.getElementById('lorem1').offsetTop-100;
// var second = document.getElementById('lorem2').offsetTop-100;
// var third = document.getElementById('lorem3').offsetTop-100;
// var a = document.getElementsByTagName('a');

console.log(first);
// console.log(second);
// console.log(third);
// for (var i = 0; i < a.length; i++) {
// 	a[0].onclick = function () {
// 		var x = 0;
// 		setInterval(function () {
// 			if(x!=first) {
// 				x++;
// 				window.scrollTo(0, x);
// 			}
// 		},1)
// 	}
// }


