let navCircles = document.getElementsByClassName('circle');
let navCirclesArray = Array.from(navCircles);
let contentDiv = document.getElementById('contentDiv');

navCirclesArray.forEach((navCircle, index) => {
	navCircle.addEventListener('click', function() {
		navCircle.classList.add('bounce-in');
		circleTransition();
		console.log('Button is clicked');
		let navIndex = navCirclesArray[index].innerText;
		console.log(navIndex);
		contextVisible(navIndex);
		setTimeout(() => {
			navCircle.classList.remove('bounce-in');
		}, 3000)
	})
});

const circleTransition = function() {
	let contentCircle = document.createElement('div');
	let coverCircle = document.createElement('div')
	contentCircle.classList.add('circle', 'purple', 'spread-out');
	coverCircle.classList.add('circle', 'latte', 'spread-out')
	contentDiv.appendChild(contentCircle);
		// contentCircle.appendChild(coverCircle)

}

const contextVisible = function(indexText) {
 	switch(indexText !== undefined) {
		case 'Home Page': 
			indexText.classList.toggle('noShow');
		break;
		case 'Experience & Skills':
			indexText.classList.toggle('noShow');
		break;
		case 'Education':
			indexText.classList.toggle('noShow');
		break;
		case 'All Projects':
			indexText.classList.toggle('noShow');
		break;
		default:
			indexText.classList.toggle('noShow');
	}
}

//Adding projects to project section 
const projectSection = document.getElementById('projectsAll');
const featuredProject = document.getElementById('featured');

let projectData = [
	{
	 name: 'Ms. Margie`s',
	 img: 'img/ms_margie_screenshot.png',
	 description: 'Online ordering webpage for sweet potato pies',
	 year: '2023',
	 source: 'https://ms-margie-a7552a.netlify.app/',
	 featured: true
	},
	{
	 name: 'Tea Cozy',
	 img: 'img/noImage.jpg',
	 description: 'Single page project for a Tea Shop',
	 year: '2023',
	 source: 'https://github.com/Sweetcake610/teaCozyProject',
	 featured: false
	},
	{
	 name: 'Appointment Planner',
	 img: 'img/noImage.jpg',
	 description: 'appointment planner site using React.js',
	 year: '2023',
	 source: 'https://github.com/Sweetcake610/AppointmentPlanner',
	 featured: false
	},
]

projectData.forEach((project) => {
	let projectDiv = document.createElement('div');
		projectDiv.setAttribute('class', 'projectInfo');
		projectDiv.innerHTML = '<h4>' + project.name + '</h4>' +
								'<img class= projectImage src=' + project.img + ' alt= "project image">' +
								'<p><strong>Description:</strong> ' + project.description + '</p>' +
								'<p><strong>Year Completed:</strong> ' + project.year+ '</p>' +
								'<p><strong>Source: </strong><a href=' + project.source + ' target= _blank>' + project.name + '</a></p>';
		projectSection.appendChild(projectDiv);

});

projectData.forEach((project) => {
	if(project.featured === true) {
		let featuredDiv = document.createElement('div');
		featuredDiv.setAttribute('class', 'projectInfo');
		featuredDiv.innerHTML = '<h4>' + project.name + '</h4>' +
								'<img class= projectImage src=' + project.img + ' alt= "project image">' +
								'<p><strong>Description:</strong> ' + project.description + '</p>' +
								'<p><strong>Year Completed:</strong> ' + project.year+ '</p>' +
								'<p><strong>Source: </strong><a href=' + project.source + ' target= _blank>' + project.name + '</a></p>';
		featuredProject.appendChild(featuredDiv);
	}
})



// let projectTwo = new Project('Easyl', 'img/noImage.jpg','Art Informational Website designed by graphic designer: Bianca', 'In Progress', '#'); 
// let projectThree = new Project("CheatSheet", 'img/noImage.jpg', "Informational CheatSheet on syntax for HTML, CSS, and JS", "2023", 'https://github.com/Sweetcake610/cheatSheet');

