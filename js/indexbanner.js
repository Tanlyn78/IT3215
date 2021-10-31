//The JavaScript onload event handler 
window.onload = rotate;

//declare  variable 
var cycleImg = 0;
var bannerImgs = new Array("images/banner1.jpg","images/banner2.jpg","images/banner3.jpg");


//The function to rotate the images.
function rotate() {
    
//rotating images...
    cycleImg++;
    if (cycleImg == bannerImgs.length) {
        cycleImg = 0;
    }
    document.getElementById("tannaBanner").src = bannerImgs[cycleImg];

    setTimeout("rotate()", 3 * 1000);
}
function bigImg(Bimg) {
    Bimg.style.height="400px";
    Bimg.style.width="500px";
}

function normalImg(Nimg) {
    Nimg.style.height="200px";
    Nimg.style.width="300px";
}
