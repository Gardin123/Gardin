document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const responseElement = document.getElementById("response");

    if(name && message) {
        responseElement.textContent = `Thank you for your message, ${name}! We will get back to you soon.`;
        responseElement.style.color = 'green';
    } else {
        responseElement.textContent = "Please fill out both fields.";
        responseElement.style.color = 'red';
    }
});
