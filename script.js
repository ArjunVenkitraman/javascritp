function validation() {
    var name = document.getElementById("cname").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("exampleRadios1").value;
    var qualification = document.getElementById("flexRadioDefault1").value;
    var mark = document.getElementById("mark").value;
    var grade = document.getElementById("grade").value;
    var address = document.getElementById("addre").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    
    var eng = document.getElementById('eng').checked;

    var tam = document.getElementById('tam').checked;

    var mal = document.getElementById('mal').checked;

    var hin = document.getElementById('hin').checked;

    var spa = document.getElementById('spa').checked;



    var d_pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    var m_pattern = /^([0-9]{3}).([0-9]{2})$/;
    var name_pattern = /^[A-Za-z]+$/;
    var email_pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var d1 = new Date();
    var year = d1.getFullYear();
    var user = dob.substring(0, 4);
    console.log(user);
    var diff = year - user;

    if (name == '') {
        alert("Fields should not be empty");
        return false;
    }
    else if (!name_pattern.test(name)) {
        alert("User name can contain only alphabets not numbers")
    }
    else if (dob == '') {
        alert("Date of birth should not be blank")
    }
    else if (!d_pattern.test(dob)) {
        alert("Date Of Birth is not in correct format");
        return false;
    }
    else if (gender == '') {
        alert("Select Gender");
        return false;
    }
    else if (!m_pattern.test(mark)) {
        alert("Mark should be in 999.99 format");
        return false;
    }
    else if (number.length != 10) {
        alert("Number can contain only 10 digits");
        return false;
    }
    else if (!email_pattern.test(email)) {
        alert("Email should be in correct format");
    }
    else {
        alert("Details successfully submitted");
        document.write("<h1>Your name is : " + name + "</h1>");
        document.write("<h1>Your date of birth : " + dob + "</h1>");
        document.write("<h1>Your Mark : " + mark + "</h1>");
        document.write("<h1>Your Contact number : " + number + "</h1>");
        document.write("<h1>Your email id : " + email + "</h1>");
        document.write("<h1>Your address : " + address + "</h1>");
        document.write("<h1>Your Gender : " + gender + "</h1>");
        document.write("<h1>Your Grade : " + grade + "</h1>");
        document.write("<h1>Your Qualification : " + qualification + "</h1>");
        document.write("<h1>Your current age : " + diff + "</h1>");
        document.write("<h1>Your choosen : </h1>");
        var lang = "";
        if (eng) {
            lang += " ENGLISH " + "<br>";
        }
        if (tam) {
            lang += " TAMIL " + " <br> ";

        }
        if (mal) {
            lang += "MALAYALAM " + " <br> ";
        }
        if (hin) {
            lang += "HINDI " + " <br> ";
        }
        if (spa) {
            lang += " SPANISH " + "  <br>";
        }
        document.write(lang);
    }
}

