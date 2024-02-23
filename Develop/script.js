// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Enter the desired length of your password (8-128 characters):");
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Password length must be a number between 8 and 128.");
  }
  // Password option alerts
  var includeUppercase = confirm("Would you like to include uppercase letters? Click OK for yes, Cancel for no.");
  var includeLowercase = confirm("Would you like to include lowercase letters? Click Ok for yes, Cancel for no.");
  var includeNumbers = confirm("Would you like to include numbers? Click Ok for yes, Cancel for no.");
  var includeSymbols = confirm("Would you like to include special characters? Click Ok for yes, Cancel for no.");

  var password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  var charset = "";
  var password = "";
  // Password selection options
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charset += "0123456789";
  if (includeSymbols) charset += "!@#$%^&*()_+`'|}{[]:;?><,./-=";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex)
  }

  return password;
}