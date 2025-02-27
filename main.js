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
    isemployed: true,
}

man.lastName = "Murphy";
man.height = 180;
man.eyeColor = "Brown";
man.Age = 23;
man.fullName = function() {
    return this.firstName + " " + this.lastName;
    
};

const meeehn = JSON.stringify(man); 
//document.getElementById("yy").innerHTML = meeehn; //using json.stringify

const paaaa = Object.values(man); //can either be object keys or values
document.getElementById("yy").innerHTML = paaaa;
//How is thuis supposed to display an object??
//Maybe a loop can be used to dispay the properties or the object poperties can be displayed as strings 
//Otherwise the result will be [Object][object]
//Here is a example
man.lastName = "Murphy";
man.height = 180;
man.eyeColor = "Brown";
man.Age = 23;

man.fullName = function() {
    return this.firstName + " " + this.lastName;
    
};

document.getElementById("yy").innerHTML = man.firstName() + " " + man.lastName();//object properties displayed as a string

//Geolocation API
const x = document.getElementById("locatonyangu");

function getLocation() {
    if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(showPosition);
} else{
    x.innerHTML = "Buda this shit is not supported in your browser!!";
}
}

function showPosition(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

//using OpenStreetMap to get place name
fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
.then(Response => response.json())
.then(data => {
    let place = data.display_name;
    x.innerHTML = `You are in: <strong>${place}</strong> 🌍`;
    })
.catch(error => {
    x.innerHTML = "Sorry, could not find the place name! 😢";
    console.error("Error:", error);
    });
}

//Handling errors
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Buda, allow location access first! 🙄";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location info not available. 🤷‍♂️";
            break;
        case error.TIMEOUT:
            x.innerHTML = "Request timed out. Try again. ⏳";
            break;
        default:
            x.innerHTML = "Something went wrong. 😕";
    }
}
