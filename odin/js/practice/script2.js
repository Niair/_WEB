const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

function add7 (num) {
  return num + 7;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function lastletter (string) {
  return string.charAt(string.length - 1)
}

console.log(multiply(add7(10), 4))
console.log(capitalize("HELLO NIHAL"))
console.log(lastletter("HELLO NIHAL"))