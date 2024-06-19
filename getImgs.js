const imageContainer = document.getElementById('image-container');
const yearToPhotoCount = {2024: 136, 2023: 122, 2022: 131, 2021: 42, 2020: 43};

Object.keys(yearToPhotoCount).map(Number).sort((a, b) => b - a).forEach(year => {
    for (let i = yearToPhotoCount[year]; i > 0; i--) {
        const img = document.createElement('img');
        img.src = `photolog/${year}/${i}.jpeg`;
        img.alt = `Image ${i}`;
        imageContainer.appendChild(img);
    }
});