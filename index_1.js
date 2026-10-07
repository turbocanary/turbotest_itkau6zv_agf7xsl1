const crypto = require("crypto");

function anotherInsecurePassword() {
  // GOOD: cryptographically secure random suffix
  var suffix = crypto.randomBytes(4).readUInt32BE(0) / 0x100000000;
  var password = "sssAAAA" + suffix;
  return password;
}