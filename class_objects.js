// Create a Student class with the following:

// Properties: name, age, grade
// Methods:
// getDetails() → Logs "Name: [name], Age: [age], Grade: [grade]"
// isPassed() → Returns true if grade is above 50, otherwise false.

class Student{
    constructor (name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;

    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
    isPassed() {
        if (this.grade < 40) {
            console.log("Needs Improvement!");
        }
        return this.grade > 50;
    }
}


const stud1 = new Student("Mithila", 34, 78);
stud1.getDetails();

console.log(stud1.isPassed());
