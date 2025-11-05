const favoriteIcon = document.querySelectorAll(".favorite-icon");

favoriteIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("filled")) {
      icon.innerHTML = "&#9825;";
      icon.classList.remove("filled");
    } else {
      icon.innerHTML = "&#10084;";
      icon.classList.add("filled");
    }
  });
});
