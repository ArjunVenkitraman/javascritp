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
var date = new Date();
function date(){
        var date = new Date();
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var period = "AM";

        console.log(printtime);
        if (hours == 0) {
            hours = 12;
        }
        if (hours > 12) {
            hours = hours - 12;
            period = "PM";
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        var time = hours + ":" + min + ":" + sec + "-" + period;
        document.getElementsByName("changes")[0].value=time;
        setTimeout(printtime, 1000);
    }
    printtime();


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
    else if (!filter.test(email)){
        alert("Please follow email format");
    }
    else if(password==""){
        alert("Password should not be empty")
    }
    else if(!pwd_expression.test(password)){
        alert("Password must contain special letters,alphabets,numbers")
    }
    else if(password.length<8 || password.length>12){
        alert("Password must contain words in between 8 and 12 ");
    }
    else if(password != cpassword){
        alert("Password must be same");
    }
    else{
        alert("Registration successfully completed");
        window.open("https://www.google.co.in/");
        //window.location.href="https://www.google.co.in/";
    }
 }


