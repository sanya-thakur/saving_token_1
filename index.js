const { encrypt, decrypt } = require('./script');

const userPayload = { id: 1, name: "Alice" };

// Encrypt
const token = encrypt(userPayload);
console.log('Encrypted Token:', token);

// Decrypt
const decoded = decrypt(token);
console.log('Decrypted Payload:', decoded);

// Test check
if (decoded && decoded.name === 'Alice') {
  console.log('✅ Success');
} else {
  console.log('❌ Try Again');
}
