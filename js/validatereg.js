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
  
    if (usrname === "") {
          document.getElementById('userName').src = "Username is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('userName').src = "";
          checkev++;
        }
    if (pwd === "") {
          document.getElementById('pwd').src = "Password is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('pwd').src = "";
          checkev++;
        }
    if (pwdVfy === "") {
          document.getElementById('pwdVfy').src = "matching password is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('pwdVfy').src = "";
          checkev++;
        }
    if (ftname === "") {
          document.getElementById('fname').src = "Your first name is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('fname').src = "";
          checkev++;
        }
  
    if (ltname === "") {
          document.getElementById('lname').src = "Your last name is required.";
          checkev = 0;
        } 
        else {
          document.getElementById('lname').src = "";
          checkev++;
        }
  
    if (email === "") {
          document.getElementById('email').src = "Your email address is required.";
          checkev = 0;
        } 
        else if (atrate < 1 || dot < atrate + 2 || dot + 2 >= eltml.length){
          document.getElementById('email').src = "Your email input is not valid.";
        }
        else {
          document.getElementById('email').src = "";
          checkev++;
        }
  
    if (phoneNumber === "") {
          document.getElementById('phoneNumber').src = "Please enter a valid telephone number."
          checkev = 0;
        } 
        else {
          document.getElementById('phoneNumber').src = "";
          checkev++;
        }
        
    if (SignUpNewsletter === "") {
          document.getElementById('nwsLetter').src = "Choose option please";
          checkev = 0;
        } 
        else {
          document.getElementById('nwsLetter').src = "";
          checkev++;
        }
  
    if (checkev === 8) {
         //Check all before opening confirmation page.
            window.location.href = "confirm.html";
        }
      }