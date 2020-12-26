import emailChecker from "../helpers/InputCheckers/emailChecker";
// import { passChecker, checkPasswords } from "../helpers/InputCheckers/passChecker";

function phoneNumberChecker(number) {
  const re = new RegExp(/^(\s*)?(\+)?([- ()+]?\d[- ()+]?){10,14}(\s*)?$/);
  return re.test(number);
}

function passwordChecker(pass) {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
  return re.test(pass);
}

function checkPasswords(pass1, pass2) {
  return pass1 === pass2;
}

const correctPhoneNumber1 = "8 950 0215011";
const correctPhoneNumber2 = "+7 950 0215011";
const correctPhoneNumber3 = "+38 950 0215011";
const incorrectPhoneNumber1 = "t 950 0215011";
const incorrectPhoneNumber2 = "! 950 0&15011";
const incorrectPhoneNumber3 = "0215011";
const incorrectPhoneNumber4 = "15151515 950 0215011";

const correctPass = "Pa$$w0rd";
const incorrectPass1 = "Pa$$";
const incorrectPass2 = "Passw0rd";
const incorrectPass3 = "Pa$$word";
const incorrectPass4 = "pa$$w0rd";
const incorrectPass5 = "PA$$W0RD";

const correctPass1 = "Pa$$w0rf";

test("Correct phone number", () => {
  expect(phoneNumberChecker(correctPhoneNumber1)).toBeTruthy();
});

test("Correct phone number", () => {
  expect(phoneNumberChecker(correctPhoneNumber2)).toBeTruthy();
});

test("Correct phone number", () => {
  expect(phoneNumberChecker(correctPhoneNumber3)).toBeTruthy();
});

test("Incorrect phone number with letters", () => {
  expect(phoneNumberChecker(incorrectPhoneNumber1)).toBeFalsy();
});

test("Incorrect phone number with forbidden symbols", () => {
  expect(phoneNumberChecker(incorrectPhoneNumber2)).toBeFalsy();
});

test("Incorrect phone number, short", () => {
  expect(phoneNumberChecker(incorrectPhoneNumber3)).toBeFalsy();
});

test("Incorrect phone number, long", () => {
  expect(phoneNumberChecker(incorrectPhoneNumber4)).toBeFalsy();
});

test("Correct password", () => {
  expect(passwordChecker(correctPass)).toBeTruthy();
});

test("Incorrect password, less than 8 symbols", () => {
  expect(passwordChecker(incorrectPass1)).toBeFalsy();
});

test("Incorrect password without specific symbols", () => {
  expect(passwordChecker(incorrectPass2)).toBeFalsy();
});

test("Incorrect password without digits", () => {
  expect(passwordChecker(incorrectPass3)).toBeFalsy();
});

test("Incorrect password, only low register", () => {
  expect(passwordChecker(incorrectPass4)).toBeFalsy();
});

test("Incorrect password, only up register", () => {
  expect(passwordChecker(incorrectPass5)).toBeFalsy();
});

test("Similar passwords in password and repeat password", () => {
  expect(checkPasswords(correctPass, correctPass)).toBeTruthy();
});

test("Different passwords in password and repeat password", () => {
  expect(checkPasswords(correctPass, correctPass1)).toBeFalsy();
});
