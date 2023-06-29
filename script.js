// Assignment Code
// Query Selectors to target the elements within the HTML:
// generateBtn = the 'button' element
var generateBtn = document.querySelector("#generate");

//1. Create variables for characters.
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var chosenCharTypes = "";

// 2. Create a 'generatePassword' function to be used within the 'writePassword' function.
function generatePassword() {

  
// 3. Create variables and give values to elements.
  generateBtn.value === "";
  var random = "";

// 4. Create a 'prompt' followed by 'confirms' to accept user input.
//  a. Password length between 8 > 128.
//  b. Lowercase characters
//  c. Uppercase characters
//  d. Numeric characters
//  e. Special Characters
  /*a.*/var passwordLength = prompt("Choose a password length with a minimum of 8 characters and a maximum of 128 characters");
  /*b.*/var lowercaseChar = confirm("Click OK to include lowercase characters.");
  /*c.*/var uppercaseChar = confirm("Click OK to include uppercase characters.");
  /*d.*/var number = confirm("Click OK to include numeric characters.");
  /*e.*/var specialChar = confirm("Click OK to include special characters.");


}

// 11. Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// 12. Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
