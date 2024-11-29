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
//spent a day looking for what the error could be only to find out that the id i was using was for the whole div
//Okaay now i understand that innerHTML modifies the content onthe html not the property src is a property of the element not content

