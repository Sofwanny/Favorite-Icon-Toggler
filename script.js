const favoriteIcon = document.querySelectorAll(".favorite-icon");


  favoriteIcon.forEach(icon => {
    icon.addEventListener("click", () => {
if (icon.innerHTML === "♡") {
    icon.textContent = "❤️";
    icon.classList.add(".filled");
  }
  else {
    icon.textContent = "♡";
    icon.classList.remove(".filled");
  }
  });
  
})