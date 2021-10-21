//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
    var myHostName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
    //setting variable to the input field for hostname
    myHostName = document.getElementById("hostNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
    console.log('Variable myHostName: ' + myHostName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    //setting html code for placeholder hostname variable
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
}