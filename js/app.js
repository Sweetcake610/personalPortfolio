// JavaScript File. Adding animation to main page and adding project section

let circles = document.querySelectorAll('.circle');
let graphic = document.getElementById('graphic');
let circlesArray = [...circles];

// circlesArray.forEach(function(circleItem) {
	// circleItem.classList.toggle('noShow');
// });

function circleAnimation(evt) {
	for(let i = 0; i < circlesArray.length; i++) {
		circlesArray[i] = evt.target;
		cirlcesArray[i].classList.toggle('noShow');
	}
}


for(let j = 0; j < circlesArray.length; j++) {
	circlesArray[j].addEventListener('load', circleAnimation, false);
}

//Adding projects to project section 

