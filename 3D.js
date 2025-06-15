const carousel = document.getElementById("carousel");
const wrapper = document.getElementById("carouselWrapper");
const items = document.querySelectorAll(".carousel__item");
const itemCount = items.length;
const angle = 360 / itemCount;
let currentIndex = 0;

function positionItems() {
  items.forEach((item, index) => {
    const itemAngle = index * angle;
    item.style.transform = `rotateY(${itemAngle}deg) translateZ(500px)`;

    // Center image gets 'front' class
    const normalizedIndex = (index - currentIndex + itemCount) % itemCount;
    item.classList.toggle("front", normalizedIndex === 0);
  });
}

function rotateToCurrent() {
  const rotationY = -currentIndex * angle;
  carousel.style.transform = `rotateY(${rotationY}deg)`;
  positionItems();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % itemCount;
  rotateToCurrent();
}

// Init
positionItems();
rotateToCurrent();

// Event listener
wrapper.addEventListener("click", nextImage);
wrapper.addEventListener("touchstart", nextImage);
