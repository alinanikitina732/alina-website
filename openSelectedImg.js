document.addEventListener('DOMContentLoaded', function() {
    
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const imageUrl = this.src;
            window.open(`image-viewer.html?src=${encodeURIComponent(imageUrl)}`, '_self');
        });
    });

    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);

});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};