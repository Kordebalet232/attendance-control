function passChecker(pass: string): boolean {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
  return re.test(pass);
}

function checkPasswords(pass1: string, pass2: string): boolean {
  return pass1 === pass2;
}

export { passChecker, checkPasswords };
