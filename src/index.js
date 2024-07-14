import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.addEventListener("DOMContentLoaded", function () {
  const targetElements = [
    {
      element: ".section-title",
      animation: { delay: 300, distance: "50px", origin: "bottom" },
    },
    {
      element: ".skills-wrapper__category",
      animation: { delay: 400, distance: "50px", origin: "bottom" },
    },
    {
      element: ".timeline-item",
      animation: { delay: 500, distance: "50px", origin: "bottom" },
    },
    // Add other elements and their animations here
  ];
  const defaultProps = {
    duration: 700,
    easing: "ease",
    reset: false,
    scale: 1,
    viewFactor: 0.2,
  };

  initScrollReveal(targetElements, defaultProps);
  initTiltEffect();

  const elements = document.querySelectorAll(".load-hidden");
  elements.forEach((element) => {
    element.classList.remove("load-hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate form
      if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
      }

      // Display success message
      alert("Message successfully sent to your email!");

      // Optionally, you can add code here to actually send the email using a service like EmailJS or a backend API.

      // Clear form
      document.getElementById("contactForm").reset();
    });
});
