document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields");
    } else {
      alert("Message Sent! Thank you for reaching out.");
      // You can add functionality to send the form data to a server here
    }
  });
