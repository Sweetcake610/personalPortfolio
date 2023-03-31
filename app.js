// JavaScript File. Adding animation to graphic display on website
let graphic = document.getElementById('graphic');

let circleOne = document.querySelector('.one');
let circleTwo = document.querySelector('.two');
let circleThree = document.querySelector('.three');
let circleFour = document.querySelector('.four');
let circleFive = document.querySelector('.five');
let circles = document.querySelectorAll('.circle');


//async function makeVisible() {
	const circleAnimation = setInterval(function makeVisible() {
		setTimeout(() => {
			circleOne.classList.add('hidden');
			circleTwo.classList.remove('hidden');
			setTimeout(() => {
				circleTwo.classList.add('hidden');
				circleThree.classList.remove('hidden');
				setTimeout(() => {
					circleThree.classList.add('hidden');
					circleFour.classList.remove('hidden');
					setTimeout(() => {
						circleFour.classList.add('hidden');
						circleFive.classList.toggle('hidden');
						setTimeout(() => {
							circleOne.classList.remove('hidden');
							circleTwo.classList.add('hidden');
							circleThree.classList.add('hidden');
							circleFour.classList.add('hidden');
							circleFive.classList.add('hidden');
						}, 2000)
					}, 1000) 
				}, 1000)
			}, 1000)
		}, 1000)
	}, 6000);
//};
// async function makeInvisible () {
// 		await makeVisible();
// 		for(let i = 1; i < circles.length; i++) {
// 			circles[i].classList.add('hidden');
// 		}
// 	};
// 	makeInvisible();
	//const myCircleInterval = setInterval(makeInvisible, 0);

	// const toggleVisibility = function() {
	// 	setInterval(() => {
	// 		makeVisibleAndInvisible(circleOne);
	// 		makeVisibleAndInvisible(circleTwo);
	// 		setTimeout(makeVisibleAndInvisible, 5000);
	// 	}, 2000)
	// }
	// toggleVisibility();
	//makeVisible(circleOne)
	//makeVisible(circleTwo);
	//makeVisible(circleThree);

	// const circleAnimation = function() {
	// 	setInterval(() => {
	// 	circleOne.classList.toggle('hidden');
	// 	}, 2000)
	// 	setInterval(() => {
	// 		circleTwo.classList.toggle('hidden');
	// 	}, 4000)
	// }
		
	// circleAnimation();
	//setInterval(circleAnimation, 3000);

// 	const animateCircles = function() {
		
// 		setTimeout(function () {
// 			circleOne.classList.add('hidden');
// 			circleTwo.classList.remove('hidden');
// 		}, 2000);
// 		setTimeout(function () {
// 			circleTwo.classList.add('hidden');
// 			circleThree.classList.remove('hidden');
// 		}, 2500);
// 		setTimeout(function () {
// 			circleThree.classList.add('hidden');
// 			circleFour.classList.remove('hidden');
// 		}, 3000);
// 		setTimeout(function () {
// 			circleFour.classList.add('hidden');
// 			circleFive.classList.remove('hidden');
// 		}, 3500);
// 		setTimeout(function () {
// 			circleOne.classList.remove('hidden');
// 			circleTwo.classList.remove('hidden');
// 			circleThree.classList.remove('hidden');
// 			circleFour.classList.remove('hidden');
// 		}, 4000);
// 		setTimeout(function () {
// 			circleTwo.classList.add('hidden');
// 			circleThree.classList.add('hidden');
// 			circleFour.classList.add('hidden');
// 			circleFive.classList.add('hidden');
// 			circleOne.classList.remove('hidden');
// 		}, 5000);
// 	}


// setInterval(animateCircles, 7000);

//Adding projects to project section 
const projectSection = document.getElementById('project');

class Project {
	constructor(title, description, year, source) {
		this._title = title,
		this._description = description,
		this._year = year,
		this._source = source
	}
	get projectInfo () {
		let projectDiv = document.createElement('div');
		projectDiv.setAttribute('class', 'project-info');
		projectDiv.innerHTML = '<h4>' + this._title + '</h4>' +
								'<p><strong>Description:</strong> ' + this._description + '<br><strong>Year Completed:</strong> ' +
								this._year + '<br><strong>Source:</strong> ' + this._source + '</p>';
		projectSection.appendChild(projectDiv);
	}
	
}
let projectOne = new Project('Personal Website', 'Codecademy Portfolio Project: Create personal website', '2023', 'This is it.');
let projectTwo = new Project('Easyl', 'Side Project: Art Informational Website designed by graphic designer: Bianca', '2023', 'unavailable'); 
//let projectThree = new Project("Ms. Margie's", "Food Distribution Website", "2019", "http//....");
projectOne.projectInfo;
projectTwo.projectInfo;
//projectThree.projectInfo;