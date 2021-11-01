//starting rotate function on window load 
window.onload = rotate;

//declare  variables and initiliaze cycle image
var cycleImg = 0;
var bannerImgs = new Array("images/banner1.jpg","images/banner2.jpg","images/banner3.jpg");

//starting the "rotate" function
function rotate() {
    
//cycling through images with if statement
    cycleImg++;
    if (cycleImg == bannerImgs.length) {
        cycleImg = 0;
    }
    //location of element that will cycle through images from html document - I added an ID
    //to the html document in this section to point to
    document.getElementById("tannaBanner").src = bannerImgs[cycleImg];
//setting image change time to 3 seconds
    setTimeout("rotate()", 3 * 1000);
}
//function for mouseover event for gallery images to enlarge images -the mouseover and mouseout function calls
//are added to the HTML
function bigImg(Bimg) {
    Bimg.style.height="500px";
    Bimg.style.width="300px";
}

function normalImg(Nimg) {
    Nimg.style.height="300px";
    Nimg.style.width="200px";
}
