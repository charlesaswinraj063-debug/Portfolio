document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      responseMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    });
  }
});
