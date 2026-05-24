//1.Declare a variable for your full name using the correct keyword. It should never change.
const FullName = "Edwin Kirika Njuguna";

//2.Declare a variable for your age using the correct keyword. It can change on your birthday.
let Age = 25;
//3.Declare a variable called isEmployed that is currently false.
let isEmployed = false;
//4.Use typeof to log the type of all three variables to the console.
typeof FullName
typeof Age;
typeof isEmployed;

console.log(typeof FullName);
console.log(typeof Age);
console.log(typeof isEmployed)

//5.Write a function called introduce that logs a sentence using all three variables — e.g. "Hi, I'm Edwin, I'm 25, employed: false".
function introduce () {
 console.log("Hi, i'm" + FullName + "i'm" + Age + " and i'm" + isEmployed  )
};

//6.Inside that function, declare a variable called secret. Try to log secret outside the function. What happens and why?
function introduce () {
    const secret = "i'm relearning JavaScript"
 console.log("Hi, i'm" + FullName + "i'm" + Age + " and i'm" + isEmployed  )
};

console.log(secret);
// i think this wont work because secret is declared inside the fuction and therefore its has a local scope and it can't be logged outside the the fuction

//7.Write the "5" + 1 and 5 - "1" examples yourself, log both, and write a comment explaining what happened in each case.

console.log("5" + 1);//here the answer is gonna be 51 because the string comes first so a concatenation is gonna be carried out
console.log(5 - "1");//here the answer is gonna be 4 because the string is gonna be converted to a number
