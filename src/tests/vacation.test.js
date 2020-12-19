import checkDates from "../helpers/checkDates";

const vacation1 = {
    start_date: new Date("2020-12-21"),
    end_date: new Date("2020-12-23"),
    worker: 1
}
const vacation2 = {
    start_date: new Date("2020-12-26"),
    end_date: new Date("2020-12-31"),
    worker: 1
}
const vacations = [vacation1, vacation2]
test("Vacation's start and end equal another vacation's start and end", () => {
    expect(checkDates("2020-12-23", "2020-12-26", 28, vacations)).toBe(-1);
 });

 test("Vacation touch beginning of another vacation", () => {
    expect(checkDates("2020-12-25", "2020-12-28", 28, vacations)).toBe(-1);
 });
 
 test("Vacation in another vacation", () => {
    expect(checkDates("2020-12-27", "2020-12-29", 28, vacations)).toBe(-1);
 });

 test("Vacation touch ending of another vacation", () => {
    expect(checkDates("2020-12-22", "2020-12-25", 28, vacations)).toBe(-1);
 });

 test("Vacation touch whole other vacation", () => {
    expect(checkDates("2020-12-25", "2021-01-02", 28, vacations)).toBe(-1);
 });

 test("Vacation start exceeds vacation end", () => {
    expect(checkDates("2021-01-10", "2021-01-05", 28, vacations)).toBe(-1);
 }); 

 test("Vacation is older than today", () => {
    expect(checkDates("2020-11-21", "2020-11-22", 28, vacations)).toBe(-1);
 }); 

 test("Vacation start equals today", () => {
    expect(checkDates("2020-12-20", "2020-12-20", 28, vacations)).toBe(1);
 }); 

 test("Too many vacations", () => {
    expect(checkDates("2021-01-01", "2021-03-27", 28, vacations)).toBe(-2);
 });

 test("Vacation takes all availible vacation days", () => {
    expect(checkDates("2021-01-01", "2021-01-10", 10, vacations)).toBe(1);
 });

 test("Vacation don't touch anything", () => {
    expect(checkDates("2020-12-24", "2020-12-25", 28, vacations)).toBe(1);
 });

 test("Vacation has same start and end", () => {
    expect(checkDates("2020-12-25", "2020-12-25", 28, vacations)).toBe(1);
 });
