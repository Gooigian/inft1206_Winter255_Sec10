const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
'images/pic1.jpg',
'images/pic2.jpg',
'images/pic3.jpg',
'images/pic4.jpg',
'images/pic5.jpg'
]
/* Declaring the alternative text for each image file */
const altTexts = {'./images/pic1.jpg': 'A close up of a human eye',
    'images/pic2.jpg': 'A stange painting',
    'images/pic3.jpg': 'Nice purple flowers',
    'images/pic4.jpg': 'A egyption wall drawing',
    'images/pic5.jpg': 'A big orange butterfly on a leaf'
}
/* Looping through images */
for (let i = 0; i < images.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altTexts[images[i]]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", function() {
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', altTexts[images[i]]);
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function () {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
         btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
        }
    })