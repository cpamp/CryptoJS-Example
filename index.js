var CryptoJS = require('crypto-js');

var salt = CryptoJS.lib.WordArray.random(128/8);
var password = 'Password2';
var key = CryptoJS.PBKDF2(password, salt, { keySize: 256/32, iterations: 1000 });

console.log("Plain Text: " + password);
console.log("Salt: " + salt.toString());
console.log("Key: " + key.toString());
console.log("Salt Length: " + salt.toString().length);
console.log("Key Length: " + key.toString().length);