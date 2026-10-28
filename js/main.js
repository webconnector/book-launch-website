(() => {
    const nairaButton = document.getElementById("copy-naira-account");
    const usdButton = document.getElementById("copy-usd-account");
    const status = document.getElementById("copy-account-status");

    async function copyAccountNumber(accountNumber, currency) {
      if (!navigator.clipboard || !window.isSecureContext) {
        status.textContent =
          "Automatic copying is unavailable in this browser. " +
          "Please copy the account number directly from the page.";
        return;
      }

      try {
        await navigator.clipboard.writeText(accountNumber);
        status.textContent =
          currency + " account number copied: " + accountNumber;
      } catch {
        status.textContent =
          "Could not copy automatically. Please select the account number manually.";
      }
    }

    nairaButton.addEventListener("click", () => {
      copyAccountNumber("0249305768", "Naira");
    });

    usdButton.addEventListener("click", () => {
      copyAccountNumber("0622221337", "USD");
    });
  })();

(() => {
      "use strict";

      const menuButton = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector("#nav-links");

      if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
          const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

          menuButton.setAttribute("aria-expanded", String(!isExpanded));
          menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
          );

          navLinks.classList.toggle("is-open", !isExpanded);
        });

        navLinks.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
          });
        });

        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
            navLinks.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.focus();
          }
        });

        document.addEventListener("click", (event) => {
          if (
            navLinks.classList.contains("is-open") &&
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
          ) {
            navLinks.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
          }
        });
      }

      const footerYear = document.querySelector("#footer-year");
      if (footerYear) {
        footerYear.textContent = String(new Date().getFullYear());
      }
    })();

    //rsvpp form handling 

      
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rsvp-form');
  const frame = document.getElementById('rsvp-response');
  const status = document.getElementById('rsvp-status');
  const button = form?.querySelector('button[type="submit"]');

  if (!form || !frame || !status || !button) return;

  let submitting = false;
  let originalButtonHTML = button.innerHTML;
  let timeoutId;

  // Ignore the iframe's initial load.
  let initialLoad = true;

  frame.addEventListener('load', () => {
    if (initialLoad) {
      initialLoad = false;
      return;
    }

    if (!submitting) return;

    clearTimeout(timeoutId);
    submitting = false;
    button.disabled = false;
    button.innerHTML = originalButtonHTML;

    status.hidden = false;
    status.className = 'form-success';
    status.textContent =
      'Thank you! Your RSVP has been submitted. We appreciate your response.';

    form.reset();
  });

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) return;

    if (submitting) {
      event.preventDefault();
      return;
    }

    submitting = true;

    status.hidden = false;
    status.className = 'form-loading';
    status.textContent = 'Submitting your RSVP…';

    button.disabled = true;
    button.textContent = 'Submitting…';

    timeoutId = setTimeout(() => {
      if (!submitting) return;

      submitting = false;
      button.disabled = false;
      button.innerHTML = originalButtonHTML;

      status.hidden = false;
      status.className = 'form-error';
      status.textContent =
        'We could not confirm the submission. Please check whether your RSVP was recorded before trying again.';
    }, 20000);
  });
});
