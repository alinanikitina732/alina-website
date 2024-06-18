const imageContainer = document.getElementById('image-container');
const yearToPhotoCount = {2023: 125, 2022: 130};

Object.keys(yearToPhotoCount).map(Number).sort((a, b) => b - a).forEach(year => {
    for (let i = yearToPhotoCount[year]; i > 0; i--) {
        const img = document.createElement('img');
        img.src = `photolog/${year}/${i}.jpeg`;
        img.alt = `Image ${i}`;
        imageContainer.appendChild(img);
    }
});