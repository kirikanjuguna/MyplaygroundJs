/*// Create an Object
const personDetails = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let details in personDetails) {
    text += personDetails[details] + " ";
  };
  
  // Display the Text

  function changeh2() {
    document.getElementById("changeh2").innerHTML = text;
}*/

//reminding myself about objects
const person = {
  fname : "John",
  lname : "Hopkins",
  age: 29,
  City:"Berlin",
  fullname: function(){
    return this.fname+ " "+ this.lname;
  },
};

document.getElementById("print").innerHTML = person.fullname() + " " + person.City;