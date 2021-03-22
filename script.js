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
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'aA#!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'aA#'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         }
                                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'aA!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'aA'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         }
                                                                                        )}
                                                                        )},
                                            function no() {makeAWindow("Would you like to include numeric characters?",
                                                                        function yes() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'a#!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'a#'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         }
                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'a!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'a'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         }
                                                                        )}
                                                                        )} 
                                                                        )},
                function no() {makeAWindow("Would you like to include uppercase characters?", 
                                            function yes() {makeAWindow("Would you like to include numeric characters?",
                                                                        function yes() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'A#!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'A#'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         }
                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'A!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, 'A'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         }
                                                                        )}
                                                                        )},
                                            function no() {makeAWindow("Would you like to include numeric characters?",
                                                                        function yes() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, '#!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, '#'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         }
                                                                        )},
                                                                        function no() {makeAWindow("Would you like to include special characters?",
                                                                                        function yes() {if ((length >= 8) && (length <= 128))
                                                                                          alert(randomizer(length, '!'))
                                                                                          else (alert("Please pick a length between 8 & 128"))
                                                                                                         },
                                                                                        function no() {
                                                                                          alert("Error: Password generator needs at least one charset.")
                                                                                        }
                                                                        )}
                                                                        )} 
                                                                        )},
   );
   }