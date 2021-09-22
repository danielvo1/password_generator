// Assignment Code
var generateBtn = document.querySelector("#generate");

// created a list of all types of ways of typing yes
var yes = ['Yes', 'Ye', 'yes', 'YES', 'ye'];

// initiated multiple arrays that hold different
let special ='!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');
let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
let number = '1234567890'.split('');

// Write password to the #password input
function writePassword() {

// prompts asking for the password property
var char_amount = parseInt(prompt("How many characters do you want in your password? (8 - 128)", ""));

// checks if the input value is within the range of given numbers
if (isNaN(char_amount)) {
  alert ("That's Not a Number! Try Again.")
} else if (char_amount < 8) {
  alert ("That's too small! Try Again.")
} else if (char_amount > 128) {
  alert ("That's too big! Try Again.")
}


var capital_result = prompt("Do you want to include Capital Letters", "");
var lowercase_result = prompt("Do you want to include Lowercase Letters", "");
var special_result = prompt("Do you want to include Special Characters?", "");
var number_result =prompt("Do you want to include numbers?", "");

  function createArray() {
    var alphabet = [];
    if (yes.includes(capital_result)) {
        alphabet = alphabet.concat(capital);  
    }
    if (yes.includes(special_result)) {
        alphabet = alphabet.concat(special);
    }
    if (yes.includes(lowercase_result)) {
        alphabet = alphabet.concat(lowercase); 
    }
    if (yes.includes(number_result)) {
        alphabet = alphabet.concat(number);
    }
    console.log(alphabet);
    return alphabet
  }  


// calls the generatePassword() function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

// generates password using
  function generatePassword() {
    const library = createArray();
    var new_string = '';
  // for loop represents counter for how many characters the user selected 
  if (!library.length) {
    alert("You need to select at least one criteria!")
    new_string = "Failed to generate. Please try again!"
    return new_string
  } else {
  for (let i = 0; i < char_amount; i ++) {
      new_string = new_string + library[Math.floor(Math.random() * library.length)];
    }
    return new_string;
  }
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
