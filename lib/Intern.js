const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email, school, education) {
		super(name, id, email, education);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

module.exports = Intern;
