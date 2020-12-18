import emailChecker from "../helpers/InputCheckers/emailChecker";
import { passChecker, checkPasswords } from "../helpers/InputCheckers/passChecker";

const CorrectMail = "test@mail.ru";

const IncorrectMail1 = "testmail.ru";
const IncorrectMail2 = "test@mail.";
const IncorrectMail3 = "test@mailru";
const IncorrectMail4 = "@mail.ru";
const IncorrectMail5 = "test@.ru";

const EmptyInput = "";
const SpaceInput = " ";

const CorrectPass = "123abcED@#";
const CorrectPass2 = "321cbaEFD#@";

const IncorrectPass1 = "12ancDE";
const IncorrectPass2 = "12acb@#";
const IncorrectPass3 = "42DEF@#";
const IncorrectPass4 = "avCF@#$";
const IncorrectPass5 = "av1G#";

test("Input correct email", () => {
  expect(emailChecker(CorrectMail)).toBeTruthy();
});

test("Input incorrect email, skip @", () => {
  expect(emailChecker(IncorrectMail1)).toBeFalsy();
});

test("Input incorrect email, skip part after dot", () => {
  expect(emailChecker(IncorrectMail2)).toBeFalsy();
});

test("Input incorrect email, skip dot", () => {
  expect(emailChecker(IncorrectMail3)).toBeFalsy();
});

test("Input incorrect email, skip part before @", () => {
  expect(emailChecker(IncorrectMail4)).toBeFalsy();
});

test("Input incorrect email, skip part before dot", () => {
  expect(emailChecker(IncorrectMail5)).toBeFalsy();
});

test("empty email input", () => {
  expect(emailChecker(EmptyInput)).toBeFalsy();
});

test("Input a space in email field", () => {
  expect(emailChecker(SpaceInput)).toBeFalsy();
});

test("Input correct password", () => {
  expect(passChecker(CorrectPass)).toBeTruthy();
});

test("Input incorrect password, without spec symbols", () => {
  expect(passChecker(IncorrectPass1)).toBeFalsy();
});

test("Input incorrect password, without uppercase letters", () => {
  expect(passChecker(IncorrectPass2)).toBeFalsy();
});

test("Input incorrect password, without lowercase letter", () => {
  expect(passChecker(IncorrectPass3)).toBeFalsy();
});

test("Input incorrect password, without digits", () => {
  expect(passChecker(IncorrectPass4)).toBeFalsy();
});

test("Input incorrect password, shorter then 6 symbols", () => {
  expect(passChecker(IncorrectPass5)).toBeFalsy();
});

test("empty password input", () => {
  expect(passChecker(EmptyInput)).toBeFalsy();
});

test("Input a space in password field", () => {
  expect(passChecker(SpaceInput)).toBeFalsy();
});

test("Input different password into password confirmation field", () => {
  expect(checkPasswords(CorrectPass, CorrectPass2)).toBeFalsy();
});
