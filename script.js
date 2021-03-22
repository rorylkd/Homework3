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

var lower = -1;
var upper = -1;
var num = -1;
var spec = -1;

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

function randomizer(length, chars) {  // Pseudorandom string generator with specific chartypes. 
  var charset = '';
  if (chars.indexOf('a') > -1) charset += 'abcdefghijklmnopqrstuvwxyz'; //Lowercase
  if (chars.indexOf('A') > -1) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase
  if (chars.indexOf('#') > -1) charset += '0123456789';                // Numeric
  if (chars.indexOf('!') > -1) charset += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';  // Special chars.
  var result = '';
  for (var i = length; i > 0; --i) result += charset[Math.floor(Math.random() * charset.length)];
  return result;
}

function popup () {  // Dear reader: sorry for this nightmare function. I kept getting weird results when I tried to loop things so I wrote it all out instead. It's horrible, I know.           


length = window.prompt("Please enter the desired length of your password.", "At least 8 and no more than 128");  

makeAWindow("Would you like to include lowercase characters?", 
                function yes() {makeAWindow("Would you like to include uppercase characters?", 
                                            function yes() {makeAWindow("Would you like to include numeric characters?",
                                                                        function yes() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, 'aA#!'))
                                                                                                         },
                                                                                        function no() {
                                                                                          alert(randomizer(length, 'aA#'))
                                                                                        }
                                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, 'aA!'))
                                                                                        },
                                                                                        function no() {
                                                                                          alert(randomizer(length, 'aA'))
                                                                                        }
                                                                                        )}
                                                                        )},
                                            function no() {makeAWindow("Would you like to include numeric characters?",
                                                                        function yes() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, 'a#!'))
                                                                                        },
                                                                                        function no() {
                                                                                          alert(randomizer(length, 'a#'))
                                                                                        }
                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, 'a!'))
                                                                                        },
                                                                                        function no() {
                                                                                          alert(randomizer(length, 'a'))
                                                                                        }
                                                                        )}
                                                                        )} 
                                                                        )},
                function no() {makeAWindow("Would you like to include uppercase characters?", 
                                            function yes() {makeAWindow("Would you like to include numeric characters?",
                                                                        function yes() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, 'A#!'))
                                                                                        },
                                                                                        function no() {
                                                                                          alert(randomizer(length, 'A#'))
                                                                                        }
                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, 'A!'))
                                                                                        },
                                                                                        function no() {
                                                                                          alert(randomizer(length, 'A'))
                                                                                        }
                                                                        )}
                                                                        )},
                                            function no() {makeAWindow("Would you like to include numeric characters?",
                                                                        function yes() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, '#!'))
                                                                                        },
                                                                                        function no() {
                                                                                          alert(randomizer(length, '#'))
                                                                                        }
                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {
                                                                                          alert(randomizer(length, '!'))
                                                                                        },
                                                                                        function no() {
                                                                                          alert("Error: password generator needs at least one charset")
                                                                                        }
                                                                        )}
                                                                        )} 
                                                                        )},
   );
   }

   

 // alert(randomizer(16, 'aA#!'));  // Just for testing



