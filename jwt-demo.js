const jwt = require("jsonwebtoken");

// define sample payload object with some user data
const payload = {
  _id: "1234567890",
  username: "millan",
  email: "millan@example.com",
};

// define a secret key string
const secret = "super-secret-key"; // this gets stored in process.env.jwt_secret_key

// create (sign) a token that expires in 1 hour
const token = jwt.sign(payload, secret, { expiresIn: "1h" });

console.log("JWT Token:\n", token, "\n");

// verify the token with the correct secret
try {
  const decoded = jwt.verify(token, secret);
  console.log("✅ Decoded with correct secret:");
  console.log(decoded); // will include payload + iat + exp
} catch (err) {
  console.error("❌ Error verifying with correct secret:", err);
}

// try verifying with the wrong secret
try {
  const wrongSecret = "totally-wrong-secret";
  const decodedWrong = jwt.verify(token, wrongSecret);
  console.log(
    "Decoded with wrong secret (this should NOT happen):",
    decodedWrong
  );
} catch (err) {
  console.log("\n❌ Error when using wrong secret:");
  console.log("Name:", err.name);
  console.log("Message:", err.message);
}
