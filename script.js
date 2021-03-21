// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



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


