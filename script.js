
const checkbox = document.getElementById("agreeCheck");
const continueBtn = document.getElementById("continueBtn");
const popup = document.getElementById("popup-overlay");

if (checkbox) {
  checkbox.addEventListener("change", () => {
    continueBtn.disabled = !checkbox.checked;
  });
}

if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    popup.style.display = "none";
    localStorage.setItem("bloxdAccepted", "true");
  });
}

window.addEventListener("load", () => {
  if (localStorage.getItem("bloxdAccepted") === "true" && popup) {
    popup.style.display = "none";
  }
});