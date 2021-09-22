// Assignment Code
var generateBtn = document.querySelector("#generate");
var yes = ['Yes', 'Ye', 'yes', 'YES'];
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let special ='!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');
let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

console.log(capital.length);

// Write password to the #password input
function writePassword() {
  var capital_result = prompt("Do you want to include Capital Letters", "");
  var special_result = prompt("Do you want to include Special Characters?", "");
  var char_amount = parseInt(prompt("How many characters do you want in your password? (8 - 128)", ""));

  console.log(char_amount);
  if (isNaN(char_amount)) {
    alert ("That's Not a Number! Try Again.")
  } else if (char_amount < 8) {
    alert ("That's too small! Try Again.")
  } else if (char_amount > 128) {
    alert ("That's too big! Try Again.")
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    if ()
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
