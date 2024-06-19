document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const imageUrl = this.src;
            // remember scroll position
            localStorage.setItem('scrollpos', window.scrollY || window.pageYOffset);
            window.open(`image-viewer.html?src=${encodeURIComponent(imageUrl)}`, '_blank');
        });
    });
});