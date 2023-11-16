let images = document.querySelectorAll(".img");
let main_container = document.querySelector('.main_container');
let currentIndex = 0;

function updateMainContainer() {
    main_container.style.backgroundImage = `url(${images[currentIndex].src})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainContainer();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainContainer();
}

function showImage(index) {
    currentIndex = index;
    updateMainContainer();
}

document.querySelector('.left').addEventListener('click', prevImage);
document.querySelector('.right').addEventListener('click', nextImage);

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        showImage(index);
    });
});

updateMainContainer(); 