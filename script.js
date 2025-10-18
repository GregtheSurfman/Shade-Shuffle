/* 
  ===== Shade Shuffle Logic =====
  This script handles the background color change when the button is clicked.
  Students will write the logic to generate a random color and update the display.
*/

/* Step 1: Select the necessary HTML elements
   - The button (to trigger the color shuffle)
   - The span (to display the new color code)
*/
const btn = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

const hexValues = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"
];

/* Step 2: Write a function that generates a random hex color code
   - Hint: A hex color starts with '#' followed by 6 characters (0–9 or A–F).
   - Example: #A1B2C3
   - You can use Math.random() and Math.floor() to pick random characters.
*/

function getRandomHexValue() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndexPosition];
  return randomHexValue;
}

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }
  return hexString;
}

/* Step 3: Handle button click event
   - When the button is clicked:
       1. Generate a new random color using randomColor()
       2. Change the background color of the page
       3. Update the text inside <span> to show the new color code
*/

btn.addEventListener("click", function () {
  const randomHexString = "#" + getRandomHexString(6);
  
  document.body.style.setProperty("background-color", randomHexString);
  
  colorCode.textContent = randomHexString;
});
