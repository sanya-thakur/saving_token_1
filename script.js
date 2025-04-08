const jwt = require('jsonwebtoken');
const SECRET_KEY = 'sanya';
const encrypt = (payload) => {
  // encrypt the payload and return token
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // optional expiry
  return token;
}

const decrypt = (token) => {
  // return decoded payload
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return null;
  }
}

module.exports = {
  encrypt,
  decrypt
}
