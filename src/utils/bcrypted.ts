import bcrypt from "bcryptjs";

export function hashUserPass(unhashedPass: string) {
  const SALT = bcrypt.genSaltSync();

  return bcrypt.hashSync(unhashedPass, SALT);
}

export function comparePass(unhashedPass: string, hash: string) {
  return bcrypt.compareSync(unhashedPass, hash);
}
