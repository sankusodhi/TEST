const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
});
