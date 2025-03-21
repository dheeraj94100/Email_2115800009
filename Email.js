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
// Function to validate the optional part "xyz" with allowed special characters (_, +, -, .)
function isValidEmailWithOptionalPart(email) {
  // Regex to validate "abc", optional "xyz" with allowed special characters, "bridgelabz.", and "co"
  const regex = /^abc([._+-]?[a-zA-Z0-9]+)?@bridgelabz\.co/;
  return regex.test(email);
}

// Test the function
console.log(isValidEmailWithOptionalPart(email)); // Output: true
console.log(isValidEmailWithOptionalPart(invalidEmail)); // Output: false

// Additional test cases
const validEmailWithSpecialChar = "abc.xyz@bridgelabz.co.in";
console.log(isValidEmailWithOptionalPart(validEmailWithSpecialChar)); // Output: true

const invalidEmailWithInvalidChar = "abc#xyz@bridgelabz.co.in";
console.log(isValidEmailWithOptionalPart(invalidEmailWithInvalidChar)); // Output: false
