function kujaribu1() {
    document.getElementById("kujaribu").innerHTML = "The beautiful Journey begins";
}

function headi() {
    document.getElementById("head").innerHTML = "My beautiful house";
}


function day() {
    document.getElementById("house").src = "images/3d-rendering-cartoon-house (1).gif";
}

function night() {
    document.getElementById("house").src = "images/3d-rendering-cartoon-house.gif";
}

function learn() {
    let x = "My House"
    document.getElementById("yy").innerHTML = x;
}

const  man = {
    firstName:"Jacob",
}

man.lastName = "Murphy";
man.height = 180;
man.eyeColor = "Brown";
man.Age = 23;
man.fullName = function() {
    return this.firstName + " " + this.lastName;
    
};

document.getElementById("yy").innerHTML = man();
