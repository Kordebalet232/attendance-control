import formatHeaderDateToStr from "../../helpers/formatHeaderDateToStr";
import Header from "../../types/header";

const months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const first_day: Date = new Date(new Date(Date.now()).setDate(1));
const last_day: Date = new Date(
  new Date(Date.now()).setDate(
    new Date(Date.now()).getFullYear() % 4 === 0 && new Date(Date.now()).getMonth() === 2
      ? 29
      : months[new Date(Date.now()).getMonth()]
  )
);
const days: number[] = [];

for (let i = 1; i < last_day.getDate() + 1; i++) {
  days.push(i);
}

const header: Header = {
  month: new Date(Date.now()).getMonth(),
  year: new Date(Date.now()).getFullYear(),
  fromDate: first_day,
  toDate: last_day,

  fromDateStr: formatHeaderDateToStr(first_day, 1),
  toDateStr: formatHeaderDateToStr(last_day, 2),
  daysOfMonth: days,
};

export default header;
