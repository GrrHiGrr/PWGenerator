// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define characters that the password can contain
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//Declare the variables for each of the DOM elements
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
// This generates the password itself
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i <length; i++) {
    password += characters.charAt(
      Math.floor(math.random() * characters.length)
    );
  }
  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  let characters = alpha;
  passwordTxt.value = generatePassword(length.value, characters);
