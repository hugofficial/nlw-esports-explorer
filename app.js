const currentYear = document.querySelector(".newYear");

function currentFullYear() {
  const newYear = new Date().getFullYear();
  currentYear.textContent = newYear;
}

currentFullYear();
