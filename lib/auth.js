import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(enteredPassword, hashedPassword) {
  const isValid = await bcrypt.compare(enteredPassword, hashedPassword);
  return isValid;
}
