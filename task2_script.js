var friends = ["Dhana", "Selva", "Arun", "Sharon"];
function addend() {

    var name = document.getElementById("fname").value;
    friends.push(name);
    document.getElementsByName("changes")[0].value = friends;

}
function addbeg() {
    var name = document.getElementById("fname").value;
    friends.splice(0, 0, name);
    document.getElementsByName("changes")[0].value = friends;
}
function dbeg() {
    var name = document.getElementById("fname").value;
    friends.splice(0, 1);
    document.getElementsByName("changes")[0].value = friends;
}
function dend() {
    var name = document.getElementById("fname").value;
    friends.pop();
    document.getElementsByName("changes")[0].value = friends;
}
function sort() {
    var name = document.getElementById("fname").value;
    friends.sort();
    document.getElementsByName("changes")[0].value = friends;
}
function comma() {
    var name = document.getElementById("fname").value;
    friends.join();
    document.getElementsByName("changes")[0].value = friends;
}

function sort() {
    friends.sort()
    document.getElementsByName("changes")[0].value = friends;

}
function forr() {
    var demo = [];
    for (var i = 0; i < friends.length; i++) {
        demo[i] = friends[i];
    }
    document.getElementsByName("changes")[0].value = demo;
}
function main() {
    var str = "";
    friends.forEach(foreach)
    function foreach(names) {
        str = str + "  " + names;
    }
    document.getElementsByName("changes")[0].value = str;
}

function forin() {
    str = "";
    for (var i in friends) {
        str = str + "   " + friends[i];
    }
    document.getElementsByName("changes")[0].value = str;
}

function forof() {
    str = "";
    for (var i of friends) {
        str = str + " " + i;
    }
    document.getElementsByName("changes")[0].value = str;
}
function date() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    document.getElementsByName("changes")[0].value = (day + "/" + month + "/" + year);

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementsByName("changes")[0].value = (day + "/" + month + "/" + year + " Time - " + h + ":" + m + ":" + s);
}


function validate() {
    // var uname=document.getElementById("uname").value;
    // var email=document.getElementById("email").value;
    // var password=document.getElementById("password").value;
    // var confirm=document.getElementById("password2").value;

    var uname = document.form1.uname.value;
    var email = document.form1.email.value;
    var password = document.form1.Password.value;
    var cpassword = document.form1.Password2.value;

    var letters = /^[A-Za-z]+$/;
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // document.getElementById("print").innerHTML=uname;

    if (uname == "") {
        alert("Username should not be empty");
    }
    else if (!letters.test(uname)) {
        alert("It should contain onlt alphabets");
    }
    else if (email == "") {
        alert("Email should not be empty");
    }
    else if (!filter.test(email)) {
        alert("Please follow email format");
    }
    else if (password == "") {
        alert("Password should not be empty")
    }
    else if (!pwd_expression.test(password)) {
        alert("Password must contain special letters,alphabets,numbers")
    }
    else if (password.length < 8 || password.length > 12) {
        alert("Password must contain words in between 8 and 12 ");
    }
    else if (password != cpassword) {
        alert("Password must be same");
    }
    else {
        alert("Registration successfully completed");
        //window.open("https://www.google.co.in/");
        // window.location.href="D:\javascritp\details.html";
        window.location = "http://127.0.0.1:5500/task2-q2b.html";
    }
}


var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

function detail() {
    var fname = document.form2.Fname.value;
    var lname = document.form2.Lname.value;
    var dob = document.form2.Dob.value;
    var gender = document.form2.radio.value;

    if (fname == "" || lname=="" || dob==""||gender=="") {
        alert("Fname should not be empty");
    }

    else if (!pattern.test(dob)) {
        console.log(dob);
        alert("Follow corrrect date of birth format");
    }

    var d1 = new Date(dob);
    var d2 = new Date();
   
    var diff = d2.getTime() - d1.getTime();

    var daydiff = diff / (1000 * 60 * 60 * 24);
    //document.write(" Total number of days between <b> " + d1 + " </b> and <b> " + d2 + " </b> is: <b> " + daydiff + " days </b>");
    if(diff>=18){
        document.getElementById("success").innerHTML=fname+" is eligible to vote";
    }
    else{
        document.getElementById("success").innerHTML=fname+" , wait to reach 18";

    }
}



