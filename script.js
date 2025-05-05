//your JS code here. If required.
// Get references to the DOM elements
const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");

// Function to return a promise that resolves after a given time
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the button click
async function handleSubmit() {
  const message = textInput.value;
  const delay = Number(delayInput.value);

  // Optional: Clear output before showing new message
  output.textContent = "";

  // Wait for the specified delay
  await wait(delay);

  // Display the message
  output.textContent = message;
}

// Add event listener to the button
btn.addEventListener("click", handleSubmit);
