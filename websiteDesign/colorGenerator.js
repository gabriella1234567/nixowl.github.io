const btn = document.querySelector("button");
const rgbs = document.querySelectorAll(".rgb");
const hsls = document.querySelectorAll(".hsl");


// Generate the first hue. Global variable so it can be accessed inside functions
let baseHue = () => Math.floor(Math.random() * 360);

const generateColor = (hue, saturation, lightness) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
// Generate a light muted color and assign lightHue the hue of that color
const lightMutedColor = () => {
  let saturation = Math.floor(Math.random() * 30) + 30;
  let lightness = Math.floor(Math.random() * 20) + 60;
  return generateColor(baseHue, saturation, lightness)
};

// Generate a dark muted color within 25 degrees of lightHue
const darkMutedColor = () => {
  let hue = (baseHue + Math.floor(Math.random() * 50) - 25 + 360) % 360;
  let saturation = Math.floor(Math.random() * 30) + 30;
  let lightness = Math.floor(Math.random() * 20) + 20;
  return generateColor(hue, saturation, lightness)
};

const lightGrey = () => {
  let lightness = Math.floor(Math.random() * 20) + 70;
  return generateColor(0, 0, lightness);
};

const darkGrey = () => {
  let lightness = Math.floor(Math.random() * 20) + 20;
  return generateColor(0, 0, lightness);
}
// Generate accent color
const accentColor = () => {
  let hue = Math.floor(Math.random() * 360);
  let saturation = Math.floor(Math.random() * 100);
  let lightness = Math.floor(Math.random() * 100);
  return generateColor(hue, saturation, lightness);
};


const applyColors = () => {
  baseHue = Math.floor(Math.random() * 360); 
  document.getElementById("color1").style.backgroundColor = lightMutedColor();
  hsls[0].innerHTML = lightMutedColor();
  document.getElementById("color2").style.backgroundColor = darkMutedColor();
  hsls[1].innerHTML = darkMutedColor();
  document.getElementById("color3").style.backgroundColor = lightGrey();
  hsls[2].innerHTML = lightGrey();
  document.getElementById("color4").style.backgroundColor = darkGrey();
  hsls[3].innerHTML = darkGrey();
  document.getElementById("color5").style.backgroundColor = accentColor();
  hsls[4].innerHTML = accentColor();
};



// Add event listener to button
btn.addEventListener("click", applyColors);

applyColors();
