document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.carousel-card');
    let angle = 0;
    const totalCards = cards.length;
    const angleIncrement = 360 / totalCards;
  
    const updateCarousel = () => {
      cards.forEach((card, index) => {
        const currentAngle = angle + index * angleIncrement;
        card.style.transform = `rotateY(${currentAngle}deg) translateZ(250px)`;
      });
    };
  
    updateCarousel();
  
    setInterval(() => {
      angle -= angleIncrement;
      updateCarousel();
    }, 3000);
  });
  