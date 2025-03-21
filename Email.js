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

const invalidEmail = "abc.xyz@bridgelabzcoin";
console.log(validateEmail(invalidEmail)); // Output: false

// Function to validate the mandatory 3rd part "co" and ensure "." after "bridgelabz"
function isValidEmailWithMandatoryParts(email) {
  // Regex to validate "abc", "bridgelabz.", and "co"
  const regex = /^abc.*@bridgelabz\.co/;
  return regex.test(email);
}

// Test the function
console.log(isValidEmailWithMandatoryParts(email)); // Output: true
console.log(isValidEmailWithMandatoryParts(invalidEmail)); // Output: true
