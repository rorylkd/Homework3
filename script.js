// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



function makeAWindow(msg, yeah, nah) {              // Function for popup box with yes/no options
  var window = $("#alert");
  window.find(".message").text(msg);
  window.find(".yes,.no").unbind().click(function() {
     window.hide();
  });
  window.find(".yes").click(yeah);
  window.find(".no").click(nah);
  window.show();

}

function popup () {             // Should create a window for each item in the array...but doesn't :(
  var criteria = ["Would you like to include lowercase characters?", "Would you like to include uppercase characters?", "Would you like to include numeric characters?", "Would you like to include special characters?"];  
    for (var i = 0; i < criteria.length; i++){
   makeAWindow(criteria[i]);}
   }

   function randomizer(length, chars) {  // Pseudorandom string generator with specific chartypes. 
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz'; //Lowercase
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase
    if (chars.indexOf('#') > -1) mask += '0123456789';                // Numeric
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';  // Special chars.
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}

console.log(randomizer(16, 'a!'));  // Just for testing
console.log(randomizer(2, '#aA!'));
console.log(randomizer(100, '#!'));


