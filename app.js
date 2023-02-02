// JavaScript File. Adding animation to graphic display on website
	let circleOne = document.querySelector('.one');
	let circleTwo = document.querySelector('.two');
	let circleThree = document.querySelector('.three');
	let circleFour = document.querySelector('.four');
	let circleFive = document.querySelector('.five');

	const animateCircles = function() {
		
		setTimeout(function () {
			circleOne.classList.add('hidden');
			circleTwo.classList.remove('hidden');
		}, 2000);
		setTimeout(function () {
			circleTwo.classList.add('hidden');
			circleThree.classList.remove('hidden');
		}, 2500);
		setTimeout(function () {
			circleThree.classList.add('hidden');
			circleFour.classList.remove('hidden');
		}, 3000);
		setTimeout(function () {
			circleFour.classList.add('hidden');
			circleFive.classList.remove('hidden');
		}, 3500);
		setTimeout(function () {
			circleOne.classList.remove('hidden');
			circleTwo.classList.remove('hidden');
			circleThree.classList.remove('hidden');
			circleFour.classList.remove('hidden');
		}, 4000);
		setTimeout(function () {
			circleTwo.classList.add('hidden');
			circleThree.classList.add('hidden');
			circleFour.classList.add('hidden');
			circleFive.classList.add('hidden');
			circleOne.classList.remove('hidden');
		}, 5000);
	}


setInterval(animateCircles, 7000);

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