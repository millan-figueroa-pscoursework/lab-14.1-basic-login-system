// bcrypt-demo.js
const bcrypt = require("bcrypt");

async function runDemo() {
  // define plain text passwrd
  const plainPassword = "SuperSecurePassword123";

  // has it with bcrypt using 10 salt rounds
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  // log the has to the console
  console.log("Hashed Password:", hashedPassword);

  // compare the og password with the hash (shld be true)
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  console.log("Correct password comparison:", isMatch); // true

  // compare a wrong password (shld be false)
  const wrongMatch = await bcrypt.compare("wrongpassword", hashedPassword);
  console.log("Incorrect password comparison:", wrongMatch); // false
}

runDemo();
