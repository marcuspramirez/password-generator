// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {       
        var password = generatePassword();
        function generatePassword() {
          var passwordLength = prompt("Input length of password between 8 and 128 characters");
          if(passwordLength < 8 || passwordLength > 128) {
            confirm("Not within 8 through 128 characters!")
          }
          else{
            var upperCase = confirm("Would you like to use uppercase characters?");
            var lowerCase = confirm("Would you like to use lowercase characters?");
            var numbers = confirm("Would you like to use numbers?");
            var charPrompt = confirm("Would you like to use special characters?");
            var specChars = ["!","@","#","$","%","^","&","*","(",")"];
            var randomPassword = "";
            // count = 0;
            for(var count = 0; count < passwordLength;) {
              if(upperCase && count < passwordLength) {
                var math = Math.floor(Math.random() * 26);
                var randomUpper = String.fromCharCode(65 + math);
                randomPassword = randomPassword + randomUpper;
                count++;
              }
              if(lowerCase && count < passwordLength) {
                var math = Math.floor(Math.random() * 26);
                var ranLower = String.fromCharCode(65 + math).toLowerCase();
                randomPassword = randomPassword + ranLower;
                count++;
              }
              if(numbers && count < passwordLength) {
                var math = Math.floor(Math.random() * 10);
                randomPassword = randomPassword + math;
                count++;
              }
              if(specChars && count < passwordLength) {
                var math = Math.floor(Math.random() * 9);
                var specialchar = specChars[math];
                randomPassword = randomPassword + specialchar;
                count++;
              }
            }
            return randomPassword;
          }
        }
var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
