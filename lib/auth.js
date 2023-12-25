var bcrypt = require("bcrypt");

export async function hashPassword(password) {
  const hash = bcrypt.hash;
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(hash, hashedPassword) {
  const compare = bcrypt.compare;

  const isVaild = await compare(password, hashedPassword);
  return isVaild;
}
