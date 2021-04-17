var i = 0 // Start point
var images = [];
var time = 3000;

// Image List
images[0] = '.images/image1.jpeg';
images[1] = '.images/image2.jpeg';
images[2] = '.images/image3.jpeg';

// Change Image

function changeImg(){
    document.slide.src = image[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;