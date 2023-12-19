const btn = document.querySelector("button");
const hsls = document.querySelectorAll(".hsl");

// Generate the first hue as a global variable so it can be accessed inside functions
let baseHue = () => Math.floor(Math.random() * 360);

// Function to return generated values as hsl string
let color = (generateColor = (hue, saturation, lightness) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
});
// Generate a light muted color and assign lightHue the hue of that color
const lightMutedColor = () => {
  let saturation = Math.floor(Math.random() * 30) + 30;
  let lightness = Math.floor(Math.random() * 20) + 60;
  return generateColor(baseHue, saturation, lightness);
};

// Generate a dark muted color within 25 degrees of lightHue
const darkMutedColor = () => {
  let hue = (baseHue + Math.floor(Math.random() * 50) - 25 + 360) % 360;
  let saturation = Math.floor(Math.random() * 30) + 30;
  let lightness = Math.floor(Math.random() * 20) + 30;
  return generateColor(hue, saturation, lightness);
};

// Generate a light grey color within 25 degrees of lightHue
const lightGrey = () => {
  let hue = (baseHue + Math.floor(Math.random() * 50) - 25 + 360) % 360;
  let saturation = Math.floor(Math.random() * 7);
  let lightness = Math.floor(Math.random() * 8) + 88;
  return generateColor(hue, saturation, lightness);
};

// Generate a dark grey color within 25 degrees of lightHue
const darkGrey = () => {
  let hue = (baseHue + Math.floor(Math.random() * 50) - 25 + 360) % 360;
  let saturation = Math.floor(Math.random() * 5) + 5;
  let lightness = Math.floor(Math.random() * 20) + 5;
  return generateColor(hue, saturation, lightness);
};
// Generate accent color on the opposite side of the color wheel from lightHue by returning the absolute value of lightHue - 180
const accentColor = () => {
  let hue;
  if (baseHue < 180) {
    hue = Math.abs(baseHue + 180);
  } else {
   hue = Math.abs(baseHue - 180);
  } 
  let saturation = Math.floor(Math.random() * 70) + 30;
  let lightness = Math.floor(Math.random() * 30) + 20;
  return generateColor(hue, saturation, lightness);
};

// Function to apply colors to the page
const applyColors = () => {
  baseHue = Math.floor(Math.random() * 360);
  let lightMuted = lightMutedColor();
  let darkMuted = darkMutedColor();
  let lightGray = lightGrey();
  let darkGray = darkGrey();
  let accent = accentColor();
  document.getElementById("color1").style.backgroundColor = lightMuted;
  document.getElementById("website-footer").style.backgroundColor = lightMuted;
  document.getElementById("website-sidebar").style.backgroundColor = lightMuted;
  hsls[0].innerHTML = lightMuted;
  document.getElementById("color2").style.backgroundColor = darkMuted;
  document.getElementById("header-text").style.color = darkMuted;
  document.getElementById("sidebar-heading").style.color = darkMuted;
  hsls[1].innerHTML = darkMuted;
  document.getElementById("color3").style.backgroundColor = lightGray;
  document.getElementById("website-main").style.backgroundColor = lightGray;
  document.getElementById("website-header").style.backgroundColor = lightGray;
  hsls[2].innerHTML = lightGray;
  document.getElementById("color4").style.backgroundColor = darkGray;
  document.getElementById("website-heading").style.color = darkGray;
  document.getElementById("website-subheading").style.color = darkGray;
  hsls[3].innerHTML = darkGray;
  document.getElementById("color5").style.backgroundColor = accent;
  hsls[4].innerHTML = accent;
};

// Add event listener to button
btn.addEventListener("click", applyColors);

applyColors();
