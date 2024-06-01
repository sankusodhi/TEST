document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let angle = 0;
  
    setInterval(() => {
      angle += 45;
      carousel.style.transform = `rotateY(${angle}deg)`;
    }, 2000);
  });
  