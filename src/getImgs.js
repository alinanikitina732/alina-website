// number of images
const numberOfImages = 125; // change this to the total number of images you have
const year = 2023;
const imageContainer = document.getElementById('image-container');

for (let i = numberOfImages; i > 0; i--) {
    const img = document.createElement('img');
    img.src = `../photolog/${year}/${i}.jpeg`;
    img.alt = `Image ${i}`;
    imageContainer.appendChild(img);
}