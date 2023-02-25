function Person(name, age, gender, address) {
    this.namee = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
}
detail = new Person("Venkit", 20, "Male", "Palakkad-Kerala");

function display() {
    document.getElementById("detail").innerHTML = "Hello " + detail.namee + "<br> You are " + detail.age + "<br>You are a " + detail.gender + "<br>You are from " + detail.address + "<br>Iam I write ?";
}

