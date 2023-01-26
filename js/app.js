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
		projectDiv.innerHTML = '<h3>Project Title: ' + this._title + '</h3>' +
								'<p>Description: ' + this._description + '<br>Year Completed: ' +
								this._year + '<br>Source: ' + this._source + '</p>';
		projectSection.appendChild(projectDiv);
	}
	
}
let projectOne = new Project('C&L Catering Distribution', 'Create full live website', '2019', 'http://...');
let projectTwo = new Project("Ms. Margie's", "Food Distribution Website", "2019", "http//....");
let projectThree = new Project('Easyl', 'Art Informational Website', '2023', 'http://easyl.com');
projectOne.projectInfo;
projectTwo.projectInfo;
projectThree.projectInfo;