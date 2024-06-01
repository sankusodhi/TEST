document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;

    const orderSummary = `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Food Item:</strong> ${food}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
    `;

    const orderSummaryDiv = document.getElementById('orderSummary');
    orderSummaryDiv.innerHTML = orderSummary;
    orderSummaryDiv.style.display = 'block';
});
