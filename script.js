document.addEventListener("DOMContentLoaded", () => {
  // Reveal/hide membership descriptions when headers are clicked
  document.querySelectorAll(".membership-header").forEach(header => {
    header.addEventListener("click", () => {
      const target = document.getElementById(header.dataset.target);
      target.classList.toggle("d-none");
    });
  });

  // Simple form validation in the modal
  const form = document.getElementById("demoForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = document.getElementById("emailInput");
    if (!emailInput.checkValidity()) {
      emailInput.classList.add("is-invalid");
    } else {
      emailInput.classList.remove("is-invalid");
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});