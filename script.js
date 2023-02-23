
function perfect() {
    var sum = 1;
    var num = document.getElementById("numinput").value;
    // var num = document.getElementsByName("pass"); //.value;

    console.log(num);
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
    if (sum == num) {
        document.write("It is a Perfect number");
    }
    else {
        document.write("It is not a perfect number");
    }
}
function factorial() {
    var num = document.getElementById("numinput").value;
    var fact = 1;
    var i = 1;
    do {
        fact = fact * i;
        i++;
    } while (i <= num);
    document.getElementById("fact").innerHTML = "Factorial of " + num + " = " + fact;
}
function fibonacci() {
    var num = document.getElementById("numinput").value;
    var a = -1, b = 1, c = 0, i = 1;
    while (i <= num) {
        c = a + b;
        a = b;
        b = c;
        document.write(c + "   ");
        i++;
    }
}
function checkif() {
    var x = document.getElementById("gender").value;
    var name = document.getElementById("name").value;
    if (x == "male") {
        document.write("You are a Male . Hello " + name);
    }
    else if (x == "female") {
        document.write("You are a Female . Hello " + name);
    }
    else {
        document.write("Invalid input");
    }
}
function checkswitch() {
    var x = document.getElementById("gender").value;
    switch (x) {
        case "male": document.write("You are a male");
            break;
        case "female": document.write("You are a female");
            break;
        default: document.write("Invalid input");
    }
}


