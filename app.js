// JavaScript File. Adding animation to graphic display on website
let graphic = document.getElementById('graphic');

let circleOne = document.querySelector('.one');
let circleTwo = document.querySelector('.two');
let circleThree = document.querySelector('.three');
let circleFour = document.querySelector('.four');
let circleFive = document.querySelector('.five');
let circles = document.querySelectorAll('.circle');


//animate cirlces to toggle visible and invisible one at a time using setInterval and setTimeout.
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


//Adding projects to project section 
const personalProjectSection = document.getElementById('personalProject');
const codecademyProjectSection = document.getElementById('codecademyProject');

class Project {
	constructor(title, description, year, source) {
		this._title = title,
		this._description = description,
		this._year = year,
		this._source = source
	}
	get personalProjectInfo () {
		let projectDiv = document.createElement('div');
		projectDiv.setAttribute('class', 'project-info');
		projectDiv.innerHTML = '<h4>' + this._title + '</h4>' +
								'<p><strong>Description:</strong> ' + this._description + '</p>' +
								'<p><strong>Year Completed:</strong> ' + this._year + '</p>' +
								'<p><strong>Source:</strong> ' + this._source + '</p>';
		personalProjectSection.appendChild(projectDiv);
	}

	get codecademyProjectInfo () {
		let projectDiv = document.createElement('div');
		projectDiv.setAttribute('class', 'project-info');
		projectDiv.innerHTML = '<h4>' + this._title + '</h4>' +
								'<p><strong>Description:</strong> ' + this._description + '</p>' +
								'<p><strong>Year Completed:</strong> ' + this._year + '</p>' +
								'<p><strong>Source:</strong> ' + this._source + '</p>';
		codecademyProjectSection.appendChild(projectDiv);
	}
	
}

let projectOne = new Project('Personal Website', 'Codecademy Portfolio Project: Create personal website', '2023', 'This is it.');
let projectTwo = new Project('Easyl', 'Art Informational Website designed by graphic designer: Bianca', '2023', 'In Progress'); 
let projectThree = new Project("Tea Cozy Project", "Off-Platform project part of the Layout with Flexbox lesson", "2022", 'https://github.com/Sweetcake610/teaCozyProject');

// Personal project section 
projectOne.personalProjectInfo;
projectTwo.personalProjectInfo;

//Codecadmey project section
projectThree.codecademyProjectInfo;