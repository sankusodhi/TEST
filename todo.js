document.addEventListener("DOMContentLoaded", function() {
    // Create a div element
    var divElement = document.createElement("div");

    // Append the div element to the body
    document.body.appendChild(divElement);

    // Add class to the div element
    divElement.classList.add("background-image");

    // Create heading element
    var headingElement = document.createElement("h1");

    // Add color to the heading element
    headingElement.style.color = "white";

    // Center the heading element
    headingElement.style.textAlign = "center";

    // Set heading text
    headingElement.textContent = "Welcome to our Food Ordering Page";

    // Append the heading element to the div
    divElement.appendChild(headingElement);

    // Create paragraph element
    var paraElement = document.createElement("p");

    // Set paragraph text
    paraElement.textContent = "Browse through our delicious menu and place your order now.";

    // Append the paragraph element to the div
    divElement.appendChild(paraElement);

    // Create another heading for "Read Book"
    var h4Element = document.createElement("h4");

    // Set text for "Read Book"
    h4Element.textContent = "Read Book";

    // Style the h4 element
    h4Element.style.color = "white";
    h4Element.style.textAlign = "center";

    // Append the h4 element to the div
    divElement.appendChild(h4Element);

    // Create another paragraph for large text
    var bigParaElement = document.createElement("p");

    // Set text for large text
    bigParaElement.textContent = "Explore our wide range of mouth-watering dishes and indulge in a culinary journey.";

    // Style the paragraph element
    bigParaElement.style.color = "white";
    bigParaElement.style.textAlign = "center";

    // Append the paragraph element to the div
    divElement.appendChild(bigParaElement);

    // Create a button element
    var buttonElement = document.createElement("button");

    // Set button text
    buttonElement.textContent = "Order Now";

    // Apply color to the button
    buttonElement.style.color = "white";

    // Apply background color to the button
    buttonElement.style.backgroundColor = "blue";

    // Append the button element to a div for centering
    var buttonWrapper = document.createElement("div");
    buttonWrapper.style.textAlign = "center";
    buttonWrapper.appendChild(buttonElement);
    divElement.appendChild(buttonWrapper);

    // Create paragraph element for "Skip Introduction"
    var skipParaElement = document.createElement("p");

    // Set text for "Skip Introduction"
    skipParaElement.textContent = "Skip Introduction";

    // Apply style to "Skip Introduction" paragraph
    skipParaElement.style.color = "white";
    skipParaElement.style.textDecoration = "underline";

    // Append the "Skip Introduction" paragraph to the div
    divElement.appendChild(skipParaElement);
});
