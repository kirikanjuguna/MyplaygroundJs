//DAY 1
//1.Declare a variable for your full name using the correct keyword. It should never change.
const fullName = "Edwin Kirika Njuguna";

//2.Declare a variable for your age using the correct keyword. It can change on your birthday.
let age = 25;
//3.Declare a variable called isEmployed that is currently false.
let isEmployed = false;
//4.Use typeof to log the type of all three variables to the console.
typeof fullName
typeof age;
typeof isEmployed;

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isEmployed);

//5.Write a function called introduce that logs a sentence using all three variables — e.g. "Hi, I'm Edwin, I'm 25, employed: false".
function introduceone () {
 console.log("Hi, i'm" + fullName + "i'm" + age + " and i'm" + isEmployed  )
};

//6.Inside that function, declare a variable called secret. Try to log secret outside the function. What happens and why?
function introduce () {
    const secret = "i'm relearning JavaScript"
 console.log(`Hi, i'm ${fullName}, i'm ${age}, and i'm ${isEmployed}`);
};

//console.log(secret); //COMMENTING THIS OUT FOR JS TO KEEP RUNNING
// i think this wont work because secret is declared inside the fuction and therefore its has a local scope and it can't be logged outside the the fuction

//7.Write the "5" + 1 and 5 - "1" examples yourself, log both, and write a comment explaining what happened in each case.

console.log("5" + 1);//here the answer is gonna be 51 because the string comes first so a concatenation is gonna be carried out
console.log(5 - "1");//here the answer is gonna be 4 because the string is gonna be converted to a number

//Declare two number variables. Write a function that takes those two numbers as parameters, adds them, and returns the result. Log the result. Then try passing a string as one of the arguments — what does JavaScript do?
 //lemme just try this without help
 const x = 2
 const y = 3
  function add(x,y){
    return(x + y);
  };
  console.log(add(x,y));
  console.log(add(x,"10"));
  console.log(add("11",y))

//Day 2 
//Learning
  function learnGreet(name){
    return `Hello ${name}`;
  };
console.log(learnGreet("Edwin"));
learnGreet();
console.log(learnGreet()); //this is to test default parameters truly the console shows Hello undefined


function newAdd(a,b) { //so a and b are parameters - placeholders  //had to change the name because i realised it wasn't working because the name of the function add was similar to yesterdays function name in the same file
  return a + b 
}

newAdd(10,11) //10 and 11 are arguments  - the actual values i pass in
console.log(newAdd(10,11)) //kept checking the terminal wondering why it wasn't showing the result for the funcion then realised i have to log


/*function multiply(a,b) {
  return a*b
}
multiply(2,3)
console.log(multiply(2,3))

const multiply = (a,b) =>{ // i feel like this is just declaring the function as a variable😂 is it even shorter?😂
  return a*b
}
*/
const multiply = (a,b) => a*b //woow now this seems shorter

//Functions calling functions
const learnDouble = (n) =>  n*2 //just wanted to try arrow function like you have tought me up there😊 so o did it different 
console.log (learnDouble(12)) //woooow it worked
//noow lemme try call the function in another and try to use arrow function still
const doubleAndLog = (n) =>{
  const result = learnDouble(n)
  console.log(`result: ${result}`)//noticed when i exclude the brackets after the console.log i get wierd abreviations before the result [ 'result: ', '' ] 24
}

doubleAndLog(12)

//Now i feel ready for the test 
//Day 2 Exercises
///Part A — regular functions
//1.Write a function greet that takes a name parameter and returns "Hello, [name]!". Call it and log the result.
function greet (name){
  return `Hello, ${name}!`;

};
console.log(greet("Edwin"));

//2.Add a default value so that greet() with no argument returns "Hello, stranger!". 
function greetTwo (name = "Stranger"){
  return `Hello, ${name}!`; //i've not understood this very well why have stranger in the parameter bracket(i thought the stranger should be if a name is not given so if asked i would have said maybe we write in the function that if name is not provided then name stranger i don't know make me understand) and in this line  i don't understand the exclamation mark

};
console.log(greetTwo());
//3.Write a function calculateArea that takes width and height and returns the area. Log it.
function calculateArea (width,height){
  return width * height;
};
console.log("Area = " + calculateArea(5,4));
/// Part B — arrow functions
//4.Rewrite greet as an arrow function stored in a const. It should behave identically.
const greetArrow = (name) => {
  return `Hello, ${name}!`

};
console.log(greetArrow("Edd"));
//5.Rewrite calculateArea as a one-line arrow function (no curly braces, no explicit return).
const calculateAreaArrow = (width,height) => width * height; //so we don't put return in this??
console.log("Area = " + calculateArea(6,4)); //you told me to answer this 
//Answer your own question: why does the one-line arrow function not need a return keyword? Reason it out from what you learned today, then type your answer here before I show you Day 3. // to be honest i don't knowbut i think its because the function is declared as a variable maybe
///Part C — functions calling functions
//6.Write a function double that returns a number multiplied by 2. Write a second function triple that returns a number multiplied by 3. Write a third function doubleThenTriple that calls both and returns the final result. Log doubleThenTriple(5) — expected output: 30.
function double(x) {
  return x * 2;
};

function triple(x) {
  return x * 3;
};

function doubleThenTriple (x) {
  const doubledX = double(x);
  return triple(doubledX); //woooow this wasn't east to pull off
};
console.log(doubleThenTriple(5));

////Part D — think about it
//7.Write a function isAdult that takes an age parameter and returns true if age is 18 or over, false otherwise. Test it with at least three different values.
function isAdult (age){
  return age >= 18; //to be honest i don't uderstand why it has returned boolean values thought i was supposed to write true in the return line // now i do
};
console.log(isAdult(20));
console.log(isAdult(16));
console.log(isAdult(18));

///Bonus — stretch your brain
//Write a function describeNumber that takes a number and returns "positive", "negative", or "zero" depending on the value. Use an arrow function. Test it with 5, -3, and 0.
const describeNumber = (number) => {
  if (number > 0) return "positive"
  if (number < 0) return "negative" //also why do we put (number < 0) in a bracket??
  return "zero"
};

console.log(describeNumber(5));
console.log(describeNumber(-3));
console.log(describeNumber(0));


/////Day 3: Arrays and Loops — where real data lives
//Learning
//Arrays
const fruits = ["apple", "banana", "Mango"]

console.log(fruits[0]) //yees i was aware of zero indexing
console.log(fruits.length)
//trying out adding and removing
const names = ["Edwin" , "Alice"]
names.push("Mwangi")
console.log(names)
names.pop()
console.log(names)
names.unshift("Vinai")
console.log(names)
names.shift()
console.log(names)

//The for loop 
const numbers = [10, 20, 30]
for (let i=0;i<numbers.length;i++){ //i think you made a mistake here// well you just wrote the for loop for me i didn't really understand it  so i just crammed  it and was wrote it all over again(and it worked) because i didn't understand why we are doing what
  console.log(numbers[i])
}

//the for...of loop
const KenyanCities = ["Nairobi", "Mombasa", "Kisumu"]
  for (const KenyanCity of KenyanCities) {
    console.log(KenyanCity) //tried putting cities here and it printed the whole array thrice i was just curious
  }

  //The big three array methods — these are everywhere in React

const numbersForMethods = [1, 2, 3, 4, 5]
//.map()
const numbersForMethodsDouble = numbersForMethods.map(n => n*2)
  console.log(numbersForMethodsDouble) //after logging it like this i realised it doesn't change the original array because i tried to log numbersForMethods and it showed the original array
//.filter()
const numbersForMethodsEven = numbersForMethods.filter(n => n%2 ===0) //i didn't know what === meant but i've researched and found out so in short we are looking for number whose reminders are 0 when you divide by 2
  console.log(numbersForMethodsEven)
//.find()
const bigBig = numbersForMethods.find(n => n>2)
  console.log(bigBig) 


//////////EXERCISES
////Day 3 Exercise — new file: day3.js No notes. No looking back. Run with node day3.js.
///Part A — array basics

//1.Create an array of 5 city names. Log the first and last item using their index. Log the total number of items.
const cities = ["London", "Berlin", "Madrid", "Rome", "Paris"]
  console.log(cities[0])
  console.log(cities[4])
  console.log(cities.length)
//2.Add a city to the end. Remove the first city. Log the array after each change.
cities.push("Nairobi")//Add a city to the end
console.log(cities)
cities.shift()//Remove the first city
console.log(cities)

///Part B — loops
//3.Use a classic forloop to log each city with its index number. Format: "0: Nairobi", "1: Berlin" etc.
for (let i=0; i<cities.length; i++){
  console.log(i + ":" + cities[i])
}
//4.Use a for...of loop to log each city in uppercase. Hint: strings have a .toUpperCase() method.
for(const city of cities){ //added const here
  console.log(city.toUpperCase())
}
///Part C — map, filter, find
//5.Create an array of numbers:[3, 7, 12, 5, 19, 2, 8] . Use map to create a new array where every number is multiplied by 10. Log both arrays — the original should be unchanged.
const numbersForTest = [3, 7, 12, 5, 19, 2, 8]
const numbersForTestMapped =  numbersForTest.map(n=>n*10)
console.log(numbersForTest)
console.log(numbersForTestMapped)
//6.Use filter on the same array to get only numbers greater than 6.
const numbersForTestFiltered = numbersForTest.filter(n=>n>6)
console.log(numbersForTestFiltered)
//7.Use find to get the first number greater than 10.
const numbersForTestFind = numbersForTest.find(n=>n>10)
console.log(numbersForTestFind)
///Part D — combine everything
//8.Create an array of 5 people's ages:[14, 22, 17, 31, 16]. Use filter and your isAdult function from Day 2 to get only the adults. Log the result.
const peopleAges = [14, 22, 17, 31, 16] //change from pascal case
function isAdult(peopleAges) {
  return peopleAges >= 18;
}
const adults = peopleAges.filter(isAdult)
console.log(adults)

//Bonus
//★Use map on the ages array to return an array of strings — "Edwin is an adult" or "Edwin is a minor" for each age. You don't have real names so just use the age itself: "22 is an adult", "14 is a minor". Combine

//lemme try now with ternary
const listOfAdultsAndMinors = peopleAges.map(peopleAge =>{
  return isAdult(peopleAge)? `${peopleAge} is an adult` : `${peopleAge} is a minor`
}
)
console.log(listOfAdultsAndMinors)