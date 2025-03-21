// Email.js

function validateEmail(email) {
  // Regex to validate the mandatory part "abc"
  const regex = /^abc/;
  return regex.test(email);
}

// Test the function
const email = "abc.xyz@bridgelabz.co.in";
console.log(validateEmail(email)); // Output: true

const invalidEmail = "xyz.abc@bridgelabz.co.in";
console.log(validateEmail(invalidEmail)); // Output: false
