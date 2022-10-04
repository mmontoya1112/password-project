// Assignment Code
var generateBtn = document.querySelector("#generate");
var choice = [];
var passwordLength = 8;
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Write password to the #password input
function writePassword() {
   var truePrompts = prompts();
   var passwordText = document.querySelector("#password");

   if(truePrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
   } else {
    passwordText.value = "";
   };

};

function generatePassword(){
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * choice.length);
    password = password + choice[randomLetter];
  };
  return password;
};

function prompts(){
  choice = [];
  passwordLength = parseInt(prompt("How long do you want your password to be?"));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 100) {
    alert("password length must be an integer between 8-100. try again!");
    return false;
  };
  if(confirm("do you want lowercase letters?")){
    choice = choice.concat(lower);
  };
  if(confirm("do you want uppercase letters?")){
    choice = choice.concat(upper);
  };
  if(confirm("do you want special letters?")){
    choice = choice.concat(special);
  }if(confirm("do you want numbers?")){
    choice = choice.concat(numbers);
  };
  return true;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
