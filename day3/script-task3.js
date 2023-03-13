function person(name, age, gender, address) {
    this.namee = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
}
detail = new person("Venkit", 20, "Male", "Palakkad-Kerala");

function display() {
    document.getElementById("detail").innerHTML = "Hello " + detail.namee + "<br> You are " + detail.age + "<br>You are a " + detail.gender + "<br>You are from " + detail.address + "<br>Iam I write ?";
}
function abstract() {
    class Person {
        constructor(name, age, gender, address) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.address = address;

            if (this.constructor == Person) {
                throw new Error("You Can`t create an instance for abstract class.");
            }
        }
        display() {
            throw new Error("Abstract class doesn`t have any implementation.");
        }
    }
    class Employee extends Person {
        constructor(name, age, gender, address, emp_code, department, designation, salary) {
            super(name, age, gender, address);
            this.emp_code = emp_code;
            this.department = department;
            this.designation = designation;
            this.salary = salary;
        }

        display() {
            document.getElementById("emp1").innerHTML = ("Hello " + e1.name + "<br>You are " + e1.age + "<br>You are a " + e1.gender + "<br>You are from " + e1.address + "<br>Your code is " + e1.emp_code + " - Your department is " + e1.department + "<br>Designation " + e1.designation + "<br>You are getting " + e1.salary);
        }
    }
      const e1 = new Employee(" Hello Ram", 20, "Male", "Kerala - Palakkad", "emp1", "Developer", "DEV", 20000);
    e1.display();
}