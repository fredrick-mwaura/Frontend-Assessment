document.addEventListener("DOMContentLoaded", function () {

  // Membership Toggle using Bootstrap collapse
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function(header) {
    header.addEventListener("click", function () {
      const target = document.querySelector(this.getAttribute('data-bs-target'));
      const collapse = new bootstrap.Collapse(target, {
        toggle: false
      });
      
      header.addEventListener('click', function () {
        collapse.toggle();
      });
    });
  });

  // Simple Form Validation
  const form = document.getElementById("demoForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("emailInput");
      const nameInput = document.getElementById("nameInput");
      let isValid = true;

      // Reset previous validation states
      emailInput.classList.remove("is-invalid");
      nameInput.classList.remove("is-invalid");

      // Validate email
      if (!emailInput.checkValidity() || !emailInput.value.trim()) {
        emailInput.classList.add("is-invalid");
        isValid = false;
      }

      // Validate name
      if (!nameInput.checkValidity() || !nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('detailsModal'));
        if (modal) {
          modal.hide();
        }
      }
    });
  }

});