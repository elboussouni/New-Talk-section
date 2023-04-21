const steps = document.querySelectorAll(".form-part");
const progressSteps = document.querySelectorAll(".form-progress-step");
const prevButtons = document.querySelectorAll(".previous-button");
const nextButtons = document.querySelectorAll(".next-button");
const submitButton = document.querySelector(".submit-button");

function showStep(index) {
  steps.forEach((step, i) => {
    step.style.display = i === index ? "block" : "none";
  });

  progressSteps.forEach((step, i) => {
    step.classList.toggle("active", i <= index);
  });

  prevButtons.forEach((button, i) => {
    button.style.display = i === index - 1 ? "block" : "none";
  });

  nextButtons.forEach((button, i) => {
    button.style.display = i === index ? "block" : "none";
  });
}

function checkFormValidity(formSection) {
  const inputs = formSection.querySelectorAll("input, textarea, select");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });

  return isValid;
}

prevButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showStep(index);
  });
});

nextButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (checkFormValidity(steps[index])) {
      showStep(index + 1);
    } else {
      alert("Please complete all mandatory fields before proceeding.");
    }
  });
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkFormValidity(steps[steps.length - 1])) {
    window.location.href = "checkout.html";
  } else {
    alert("Please complete all mandatory fields before submitting.");
  }
});

showStep(0);
