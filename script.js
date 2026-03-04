const knight = document.querySelector(".knight-container");

knight.addEventListener("mouseenter", () => {
  knight.style.transform = "scale(1.05)";
});

knight.addEventListener("mouseleave", () => {
  knight.style.transform = "scale(1)";
});