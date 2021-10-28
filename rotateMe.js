//The JavaScript onload event handler 
window.onload = rotate;

//declare  variable 
var theExchange = 0;
var exImages = new Array("images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg");

//The function to rotate the images.
function rotate() {
    
//Hello - What do you think happened here?
    theExchange++;
    if (theExchange == exImages.length) {
        theExchange = 0;
    }
    document.getElementById("bannerImages").src = exImages[theExchange];

    setTimeout(rotate, 3 * 1000);
}
