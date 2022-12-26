var fs = require('fs');
var readlineSync = require('readline-sync'); 

//npm intall readLineSync : question


let students = [];

function loadData() {
	let fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
}

function showStudents() {
	for(let student of students) {
		console.log(student.name, student.age);
	}
}

function createStudent() {
	let name = readlineSync.question('Name: ');
	let age = readlineSync.question('Age: ');
	let newStudent = {
		name: name,
		age: parseInt(age)
	};

	students.push(newStudent);
}


function saveAndExit() {
	const contentData = JSON.stringify(students);
	fs.writeFileSync('./data.json', contentData, { encoding: 'utf8'}) 
}

function showMenu() {
	console.log('1. Show students ...')
	console.log('2. Create a new student')
	console.log('3. Save and exit')
	var option = readlineSync.question('>');
	// console.log(option)
	switch(option) {
		case '1': 
			showStudents();
			showMenu();
			break;
		case '2':
			createStudent();
			showMenu();
			break;
		case '3':
			saveAndExit();
			break;
		default: 
			console.log('Wrong option');
			showMenu();
			break;
	}
}


function main() {
	loadData();
	showMenu();
}

main();

