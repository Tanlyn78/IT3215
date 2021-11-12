//function to create new form to hold data gathered from cookies using formData methods
function getFormData (formName) {
    let fmElements = document.forms[formName];
    const formData = new FormData(fmElements);
    
    console.log('starting');
    //creating key/value pairs for displaying formData later
    for(let key of formData.keys()) {
        document.cookie = `${key}=${formData.get(key)}`;
    }
}

//function to get the cookies decoded and split into key/value paris to create output later
//cname is cookie name
//decoded cookie will be the decoded URI content converting it to a string
//then splitting it by the semi=colon and running the loop to fill in the ca (cookie array)
//then looking for a cookie with a corresponding value and if present adding it to the array

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    //if no cookie found return empty string
    return "";
}

//running a function to take the passed in cookie data and displaying it on the confirm page
//each line contructs the element id and then displays user friend text of User Name, Password, etc
//and then matches it up with the capture and decoded cookie data from the previous functions
function displayFormData(id) {
    document.getElementById(id).innerText += `User Name = ${getCookie('userName')} \n`;
    document.getElementById(id).innerText += `Password = ${getCookie('pwd')} \n`;
    document.getElementById(id).innerText += `First name = ${getCookie('fName')} \n`;
    document.getElementById(id).innerText += `Last Name = ${getCookie('lName')} \n`;
    document.getElementById(id).innerText += `Email = ${getCookie('email')} \n`;
    document.getElementById(id).innerText += `Phone Number = ${getCookie('phoneNbr')} \n`;
    document.getElementById(id).innerText += `Newsletter = ${getCookie('signUpNewsletter')} \n`;

}
