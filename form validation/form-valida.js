function form(){
        First = document.getElementById("First").value;
        masg = document.getElementById("namemasg");

        middle = document.getElementById("Middle").value;
        middlemasg = document.getElementById("namemasg2");

        last = document.getElementById("Last").value;
        lastmasg = document.getElementById("namemasg3");

        date = document.getElementById("date").value;
        datemasg = document.getElementById("namemasg4");

        Address = document.getElementById("Address").value;
        Addmasg = document.getElementById("namemasg5");

        phone = document.getElementById("phone").value;
        phonemasg = document.getElementById("namemasg6");

        course = document.getElementById("Courses").value;
        coursemasg = document.getElementById("namemasg7");

        Langu = document.getElementById("Language").value;
        langmasg = document.getElementById("namemasg8");

        pass = document.getElementById("password").value;
        passmasg = document.getElementById("namemasg9");


    if(First == ""){
        masg.innerHTML = "please Enter Name";
        masg.style.color = "red";
    }else{
        masg.innerHTML = "done";
        masg.style.color = "green";
}

if(middle == ""){
        middlemasg.innerHTML = "please Enter Middle";
        middlemasg.style.color = "red";
    }else{
        middlemasg.innerHTML = "done";
        middlemasg.style.color = "green";
}


if(last == ""){
        lastmasg.innerHTML = "please Enter phone.no";
        lastmasg.style.color = "red";
}else{
        lastmasg.innerHTML = "done";
        lastmasg.style.color = "green";
        lastmasg.style.backgroundColor = "blue";
}

if(date == ""){
        datemasg.innerHTML = "please Enter Date of Birth";
        datemasg.style.color = "red";
}else{
        datemasg.innerHTML = "done";
        datemasg.style.color = "green";
        datemasg.style.backgroundColor = "blue";
}

if(Address == ""){
        Addmasg.innerHTML = "please Enter Address";
        Addmasg.style.color = "red";
}else{
        Addmasg.innerHTML = "done";
        Addmasg.style.color = "green";
        Addmasg.style.backgroundColor = "blue";
}

if(phone == ""){
        phonemasg.innerHTML = "please Enter Phone.No";
        phonemasg.style.color = "red";
}else{
        phonemasg.innerHTML = "done";
        phonemasg.style.color = "green";
        phonemasg.style.backgroundColor = "blue";
}


if(course == ""){
        coursemasg.innerHTML = "please Enter Course";
        coursemasg.style.color = "red";
}else{
        coursemasg.innerHTML = "done";
        coursemasg.style.color = "green";
        coursemasg.style.backgroundColor = "blue";
}


if(Langu == ""){
        langmasg.innerHTML = "please Enter Language";
        langmasg.style.color = "red";
}else{
        langmasg.innerHTML = "done";
        langmasg.style.color = "green";
        langmasg.style.backgroundColor = "blue";
}

if(pass == ""){
        passmasg.innerHTML = "please Enter Password";
        passmasg.style.color = "red";
}else{
        passmasg.innerHTML = "done";
        passmasg.style.color = "green";
        passmasg.style.backgroundColor = "blue";
}

}

submit = document.getElementById("submit");

masg = document.getElementById("First");

middlemasg = document.getElementById("Middle");

lastmasg = document.getElementById("Last");

datemasg = document.getElementById("date");

Addmasg = document.getElementById("Address");

Phonemasg = document.getElementById("phone");

coursemasg = document.getElementById("courses");

langmasg = document.getElementById("Language");

pass = document.getElementById("password");

submit.addEventListener("click",form);
