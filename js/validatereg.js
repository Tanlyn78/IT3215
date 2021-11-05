//Form validation to check that all required fields are fill-out
function checkall() {
    var checkev = 0;
    var usrname = document.valForm.userName.value;
    var pwd = document.valForm.pwd.value;
    var pwdVfy = document.valForm.pwdVfy.value;
    var ftname = document.valForm.fname.value;
    var ltname = document.valForm.lname.value;
    var email = document.valForm.email.value;
    var phone = document.valForm.phoneNumber.value;
    var atrate = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    var SignUpNewsletter = document.getElementById('nwsLetter').value;
  
    if (usrname == "") {
          document.getElementById('userName').innerHTML = "Username is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('userName').innerHTML = "";
          checkev++;
        }
    if (pwd == "") {
          document.getElementById('pwd').innerHTML = "Password is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('pwd').innerHTML = "";
          checkev++;
        }
    if (pwdVfy == "") {
          document.getElementById('pwdVfy').innerHTML = "matching password is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('pwdVfy').innerHTML = "";
          checkev++;
        }
    if (ftname == "") {
          document.getElementById('fname').innerHTML = "Your first name is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('fname').innerHTML = "";
          checkev++;
        }
  
    if (ltname == "") {
          document.getElementById('lname').innerHTML = "Your last name is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('lname').innerHTML = "";
          checkev++;
        }
  
    if (email == "") {
          document.getElementById('email').innerHTML = "Your email address is required.";
          checkev = 0;
        } 
        else if (atrate < 1 || dot < atrate + 2 || dot + 2 >= eltml.length){
          document.getElementById('email').src = "Your email input is not valid.";
        }
        else {
          document.getElementById('email').src = "";
          checkev++;
        }
  
    if (phoneNumber == "") {
          document.getElementById('phoneNumber').src = "Please enter a valid telephone number."
          checkev = 0;
        } 
        else {
          document.getElementById('phoneNumber').src = "";
          checkev++;
        }
        
    if (SignUpNewsletter == "") {
          document.getElementById('nwsLetter').src = "Choose option please";
          checkev = 0;
        } 
        else {
          document.getElementById('nwsLetter').src = "";
          checkev++;
        }
  
    if (checkev == 8) {
         //Check all before opening confirmation page.
            window.location.href = "confirm.html";
        }
      }
