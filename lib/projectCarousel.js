const wrapper = document.querySelector('.card-view-wrapper');
const cards = document.querySelectorAll('.card');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0;
const cardsPerView = 3;
const totalCards = cards.length;

nextButton.addEventListener('click', () => {
  if (currentIndex < totalCards - cardsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0; // Wrap around to the beginning
  }
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - cardsPerView; // Wrap around to the end
  }
  updateCarousel();
});

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 30; // Include 30px margin
  wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
