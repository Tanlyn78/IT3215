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
function actionWhenMouseOver(img) {
    var img = document.getElementsByClassName("gallery").src;
    img.style['width'] = "400px";
    img.style['height'] = "300px";
}
