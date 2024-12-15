// Create an Object
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
}