// JavaScript File. Adding animation to main page and adding project section

let circles = document.getElementsByClassName('circle');
let a = 0;

function circleAnimation(circles) {
	const circlesArray = [...circles];
	for(let i = 0; i < circlesArray.length; i++) {
		circlesArray[i].classList.toggle('noShow');
	}	
}

do{
	circles.addEventListener('load', setInterval(circleAnimation, 600000));
	clearInterval(circleAnimation);
	a++;
}while(a < 10);
