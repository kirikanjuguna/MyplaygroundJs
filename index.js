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