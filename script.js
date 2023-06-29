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

// 5. Create 'if' and 'if else' statements to check if the minimum required criteria has been selected.
/*If the minimum criteria was not met, an alert will remind the user of the requirement and start the promps from the beginning.*/
if (passwordLength < 8 || passwordLength > 128) {
  alert("Please try again: Choose a minimum number of 8 or maximum number of 128")
  var passwordLength = prompt("Choose a password length with a minimum of 8 characters and a maximum of 128 characters");
} else if (lowercaseChar === false && uppercaseChar === false && number === false && specialChar === false) {
  alert("Please choose a minimum of one password criteria.")
  var lowercaseChar = confirm("Click OK to include lowercase characters.");
  var uppercaseChar = confirm("Click OK to include uppercase characters.");
  var number = confirm("Click OK to include numeric characters.");
  var specialChar = confirm("Click OK to include special characters.");
}


}

// 11. Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// 12. Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
