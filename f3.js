document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('orderForm');
    const orderSummaryDiv = document.getElementById('orderSummary');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const food = document.getElementById('food').value;
            const quantity = document.getElementById('quantity').value;
            const price = document.getElementById('price').value;
            const totalPrice = (quantity * price).toFixed(2);

            const orderSummary = `
                <h2 class="text-center">Order Summary</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Food Item:</strong> ${food}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Price per Item:</strong> $${price}</p>
                <p><strong>Total Price:</strong> $${totalPrice}</p>
            `;

            orderSummaryDiv.innerHTML = orderSummary;
            orderSummaryDiv.style.display = 'block';
        }

        form.classList.add('was-validated');
    }, false);
});


