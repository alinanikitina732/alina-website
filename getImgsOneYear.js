const imageContainer = document.getElementById('image-container');
const yearToPhotoCount = {2024: 138, 2023: 122, 2022: 128, 2021: 43, 2020: 43};

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadPhotos() {
    const year = getQueryParameter('year');
    if (year) {
        imageContainer.innerHTML = ''; // clear existing images

        document.getElementById('year-header').textContent = `${year}`;

        const photoCount = yearToPhotoCount[year];
        if (photoCount) {
            for (let i = photoCount; i > 0; i--) {
                const img = document.createElement('img');
                img.classList.add('gallery-image');
                img.src = `photolog/${year}/${i}.jpeg`;
                img.alt = `Image ${i}`;
                imageContainer.appendChild(img);
            }
        } else {
            imageContainer.innerHTML = 'no photos available for this year :/';
        }
    }
}

document.addEventListener('DOMContentLoaded', loadPhotos);