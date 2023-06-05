// JavaScript File. Adding animation to graphic display on website
let graphic = document.getElementById('graphic');

let circleOne = document.querySelector('.one');
let circleTwo = document.querySelector('.two');
let circleThree = document.querySelector('.three');
let circleFour = document.querySelector('.four');
let circleFive = document.querySelector('.five');

function circlesOnDisplay(circle) {
	circle.classList.remove('hidden');
}

function circlesOffDisplay(circle) {
	circle.classList.add('hidden');
}
	

//animate cirlces to toggle visible and invisible one at a time using setInterval and setTimeout.
const circleAnimation = setInterval(function makeVisible() {
	setTimeout(() => {
		circlesOffDisplay(circleOne);
		circlesOnDisplay(circleTwo);
		setTimeout(() => {
			circlesOffDisplay(circleTwo);
			circlesOnDisplay(circleThree);
			setTimeout(() => {
				circlesOffDisplay(circleThree);
				circlesOnDisplay(circleFour);
				setTimeout(() => {
					circlesOffDisplay(circleFour);
					circlesOnDisplay(circleFive);
					setTimeout(() => {
						circlesOnDisplay(circleOne);
						circlesOffDisplay(circleTwo);
						circlesOffDisplay(circleThree); 
						circlesOffDisplay(circleFour); 
						circlesOffDisplay(circleFive); 
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
								'<p><strong>Source: </strong><a href=' + this._source + ' target= _blank>' + this._title + '</a></p>';
		personalProjectSection.appendChild(projectDiv);
	}

	get codecademyProjectInfo () {
		let projectDiv = document.createElement('div');
		projectDiv.setAttribute('class', 'project-info');
		projectDiv.innerHTML = '<h4>' + this._title + '</h4>' +
								'<p><strong>Description:</strong> ' + this._description + '</p>' +
								'<p><strong>Year Completed:</strong> ' + this._year + '</p>' +
								'<p><strong>Source: </strong><a href=' + this._source + ' target= _blank>' + this._title + '</a></p>';
		codecademyProjectSection.appendChild(projectDiv);
	}
	
}

let projectOne = new Project('Personal Website', 'Codecademy Portfolio Project: Create personal website', '2023', '#');
let projectTwo = new Project('Easyl', 'Art Informational Website designed by graphic designer: Bianca', 'In Progress', '#'); 
let projectThree = new Project("CheatSheet", "Informational CheatSheet on syntax for HTML, CSS, and JS", "2023", 'https://github.com/Sweetcake610/cheatSheet');
let projectFour = new Project('Appointment Planner', 'Codecademy Challenge Project using React', '2023', 'https://github.com/Sweetcake610/AppointmentPlanner');
let projectFive = new Project('Tea Cozy', 'Single page project for a Tea Shop', '2022/23', 'https://github.com/Sweetcake610/teaCozyProject');

// Personal project section 
projectOne.personalProjectInfo;
projectTwo.personalProjectInfo;


//Codecadmey project section
projectThree.codecademyProjectInfo;
projectFive.codecademyProjectInfo;
projectFour.codecademyProjectInfo;
