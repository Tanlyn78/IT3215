//declare function variables, one for id element and the other for name
let $ = function (id) { return document.getElementById(id); };
let _ = function (name) { return document.getElementsByName(name); };

//declare regex for string values of different form fields
//alphaNumeric is for all upper and lower case letters and numbers 1-9
let alphaNumeric = /^[a-zA-Z0-9]*^/;
//characters some combination of alphaNumeric in the beginning, followed by 'at' symbol
//which is required, followed by another alphaNumeric string and then followed by a required
//dot, then completed with a 2 or 3 alpha only character combo
let emailBasic = /(([a-z\d.]+)[@]([a-z\d]+)[.]([a-z]+))/;
//password contains at least one alpha character and any digits and
//that combination needs to contain at least 8 characters
let pwdBasic = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//phone number 3 digits followed by - and then 3 digits then - and 4 digits
let phoneten = /^\d{3}(-\d{3})(-\d{4})/;
//create placeholder array for capture errors
let allErrs = [];

//adding event listener for changes to form
function valFields(form) {
        $('valForm').addEventListener('submit', function (event) {
            event.preventDefault();
        });
    
//array reset to empty prior to final check as the other functions are checked on change
        allErrs = [];

    //pulling the values of the names from html form to process in the validation
        valUserName(form.userName.value);
        valPwd(form.pwd.value);
        valPwdVfy(form.pwdVerify.value, form.pwd.value);
        valFName(form.fName.value);
        valLName(form.lName.value);
        valEmail(form.email.value);
        valPhone(form.phoneNbr.value);

//if there is no errors captures in the array then return a confirmation page
        if (allErrs.length === 0) {
            getFormData('valForm');
            window.location.href = 'confirm.html';
            return false;
        } else {
 //if error exist goes to the first part of the array and focuses the cursor there
            allErrs[0].focus();
            return false;
        }
}

//declare isEmpty arrow function with arrow expression to check for empty fields after trimming white space
const isEmpty = (userString) => {
    //trimming whitespace and then capturing length
    let str = userString.trim().length;
    //if empty will return true
    return !str;
};

//declare isError arrow function for id and message parameters to display to user
const isError = (id,message) => {
    //updating name variable to remove the "Err" from the end of the id
    let name = id.replace("Err", "");
    //match the id and pull the correctly related message
    $(id).innerText = `${message}`;
    //push the name obtained that first matches the name obtained from the replace previously
    allErrs.push(_(name)[0])
}
//path for if the entered data is valid and not an error
const isValid = (id) => {
    //updating name variable to remove the "Err" from the end of the id
    let name = id.replace("Err", "");
    //variable for use in index call of logged errors
    let valName = _(name)[0];
    //for valid matches, remove any text
    $(id).innerText = "";
    
    //checks index of valName to see if larger than -1
    //-1 is indicative of an empty array so if the value is is higher than that
    //the splice will remove everything after that
    let index = allErrs.indexOf(valName);
    if(index > -1) {
        //reduces the index by 1
        allErrs.splice(index,1);
    }
}
//declare process with arrow function for validating the username field
//will use if/else statements that can be applied in large part to other fields
const valUserName = (userName) => {
    //first if statement checks via the isEmpty function
    if (isEmpty(userName)){
        //if isEmpty returns a value of "true" from the !str then the info is passed
        //to isError function to log the id and associated message to map back to 
        //the field the message is associated to in the html
        isError('userNameErr',"User name is a required field.");
        //checks the username entry against the regex titled alphanumeric
        //if it does not match it goes to the isError again with the applicable message
    } else if (!userName.match(alphaNumeric)){
        isError ('userNameErr',"User name can only contain letters and numbers.");
        //finally if neither above match, then it is valid and can be logged to isValid function
    } else {
        isValid('userNameErr');
    }
}
//re-use logic from valUserName to process all the other fields with slight variations in 
//messages and regex matches and 
const valPwd = (pwd) => {
    if (isEmpty(pwd)){
        isError('pwdErr',"Password is a required field.");
    } else if (!pwd.match(pwdBasic)){
        isError ('pwdErr',"Password must contain at least 8 letters and numbers only.");
    } else {
        isValid('pwdErr');
    }
}
//the verify password will be treated slight different, it needs to only check if its empty
//and if it matches the original password. we don't need to regex since the first password
//has already been checked by that
const valPwdVfy = (pwdVerify,pwd) => {
    if(isEmpty(pwdVerify)){
        isError('pwdVerifyErr',"Matching password is a required field.");
    } else if (pwdVerify !== pwd){
        isError ('pwdVerifyErr',"Password entries must match.");
    } else {
        isValid('pwdVerifyErr');
    }
}
//I'm re-using the alphanumeric even though it accepts numbers only for simplicity of the project
//and the message doesn't mention allowing numbers even though the regex technically allows it
const valFName = (fName) => {
    if(isEmpty(fName)){
        isError('fNameErr',"First name is required.");
    } else if (!fname.match(alphaNumeric)){
        isError ('fNameErr',"First name can only contain letters.");
    } else {
        isValid('fNameErr');
    }
}
    //resuing the same logic for last name
const valLName = (lName) => {
    if(isEmpty(lName)){
        isError('lNameErr',"Last name is required.");
    } else if (!lName.match(alphaNumeric)){
        isError ('lNameErr',"Last name can only contain letters.");
    } else {
        isValid('lNameErr');
    }
}
    //validation of email checking for empty, against emailBasic regex and returning proper error
const valEmail = (email) => {
    if (isEmpty(email)) {
        isError('emailErr', "Email must be entered for registration.");
    } else if (!email.match(emailBasic) ) {
        isError('emailErr', "Email format not correct.");
    } else {
        isValid('emailErr');
    }
}
//validate phone nubmer as not empty, and phone in 555-555-5555 format with proper error
const valPhone = (phoneNbr) => {
    if (isEmpty(phoneNbr)) {
        isError('phoneNbrErr', "A valid phone number is required.");
    } else if (!phoneNbr.match(phoneten) ) {
        isError('phoneNbrErr', "Phone number must be entered as 555-555-5555");
    } else {
        isValid('phoneNbrErr');
    }
}

