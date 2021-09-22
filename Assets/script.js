// Assignment Code
var generateBtn = document.querySelector("#generate");
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let special ='!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');
let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

console.log(capital.length);

// Write password to the #password input
function writePassword() {
  var capital_result = prompt("Do you want to include Capital Letters", "");
  var special_result = prompt("Do you want to include Special Characters?", "");
  const char_amount = parseInt(prompt("How many characters do you want in your password? (8 - 128)"));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
