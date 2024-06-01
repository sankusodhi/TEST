document.addEventListener('DOMContentLoaded', function () {
    const colorBtn = document.getElementById('colorBtn');
  
    colorBtn.addEventListener('click', function () {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    });
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
document.getElementById('colorBtn').addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
  
