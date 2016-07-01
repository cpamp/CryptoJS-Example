var CryptoJS = require('crypto-js');

var salt = CryptoJS.lib.WordArray.random(128/8);
var password = 'Password2';
var key = CryptoJS.PBKDF2(password, salt, { keySize: 256/32, iterations: 1000 });

console.log(salt.toString());
console.log(password);
console.log(key.toString());
console.log("Length: " + key.toString().length);