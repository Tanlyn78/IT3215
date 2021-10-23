var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    // display the volunteers in the text area
    //$("volunteerList").value = volunteerArray.join("\n");

	// comment out the line above change this to a loop instead to loop through the array.
	//create variable with empty string
    var volunteerString = "";
    //for statement initial variable i to 0 and the length to the length of array and increments
    //counter for variable
    for (var i=0;i<volunteerArray.length;i++){
        //update volunteerString with each new name and increment i with the indexed count
        volunteerString = volunteerString + "\n" + (i+1) + ". " + volunteerArray[i];
    }
    //display results in volunteer list section with the volunteerString collected data
    $("volunteerList").value = volunteerString;
};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // get the data from the form (hint: use the same format as from the add).
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // remove the string from the array (hint, loop through the entire list, compare the string with the item in the array.
    //loop to go through list of volunteers in array
	for (var i=0; i<volunteerArray.length; i++){
		//if statement to verify the entered name against an existing list and remove it using splice
        if (volunteerArray.indexOf(volunteerString) !== -1){
            volunteerArray.splice(volunteerArray.indexOf(volunteerString),1)
        }
    }
 // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};
