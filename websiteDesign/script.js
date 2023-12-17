const btn = document.querySelector("button");
const colors = document.querySelectorAll(".color");
const hexes = document.querySelectorAll(".hex");

// Add event listener to button
btn.addEventListener("click", generateColors);

function generateColors() {
  for (let i = 0; i < colors.length; i++) {
    // Generate random color
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Add color to background
    colors[i].style.backgroundColor = "#" + randomColor;
    colors[i].classList.add("fade-in");
    setTimeout(() => {
      colors[i].classList.remove("fade-in");
    }, 500);
    hexes[i].innerHTML = randomColor;
  }
}

generateColors();
