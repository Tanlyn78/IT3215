//The JavaScript onload event handler 
window.onload = rotate;

//declare  variable 
var bannerImgs = new Array("images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg");
var rotateImages = 0;

//The function to rotate the images.
function rotate() {
    
//Hello - What do you think happened here?
    rotateImages++;
    if (rotateImages == bannerImgs.length) {
        rotateImages = 0;
    }
    document.getElementById("bannerImages").src = bannerImgs[rotateImages];

    setTimeout(rotate, 3 * 1000);
}
