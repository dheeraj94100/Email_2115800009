// Email.js
// Function to validate the email format
function isValidEmailFormat(email) {
  // Regex to validate the mandatory parts "abc" and "bridgelabz"
  const regex = /^abc.*@bridgelabz/;
  return regex.test(email);
}
function validateEmail(email) {
  // Regex to validate the mandatory part "abc"
  const regex = /^abc/;
  return regex.test(email);
}

// Test the function
const email = "abc.xyz@bridgelabz.co.in";
console.log(validateEmail(email)); // Output: true

const invalidEmail = "abc.xyz@bridgelabz.co.in";
console.log(validateEmail(invalidEmail)); // Output: false
