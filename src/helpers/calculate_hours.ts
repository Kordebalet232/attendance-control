import { worker } from "../types/user";

const months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculateHours(workers: worker[], month: number, year: number): void {
  let id = 1;
  let days: number = months[month];
  let days2: number = months[month];
  if (year % 4 === 0 && month === 2) {
    days = days + 1;
    days2 = days2 + 1;
  }

  for (let i = 0; i < workers.length; i++) {
    workers[i].hours = [];
    console.log(days2);
    if (workers[i].exits[0] !== undefined && workers[i].enters[0] !== undefined) {
      for (let k = 0; k < new Date(workers[i].exits[0].time).getDate() - 1; k++) {
        // если тут был пропуск, он отметится в другой функции
        //Если месяц начался с выходных (с сервера придет 1-й рабочий день)
        workers[i].hours.push({ DisplayTime: "", id: id, letterDisplay: "Е" });
        id = id + 1;
        days = days - 1;
      }
      let total_hours = 0;
      let total_days = 0;
      let exit: Date = new Date(workers[i].exits[0].time);
      let enter: Date = new Date(workers[i].enters[0].time);
      let diff: number = +exit - +enter;
      let hours: number = (diff / (1000 * 60 * 60)) % 24;
      let prevDay: number = new Date(workers[i].exits[0].time).getDate();
      total_hours = total_hours + hours;
      total_days = total_days + 1;
      workers[i].hours.push({
        DisplayTime: hours.toFixed(2),
        id: id,
        letterDisplay: "Я",
      });
      id = id + 1;
      for (let j = 1; j < days; j++) {
        if (workers[i].exits[j] === undefined || workers[i].enters[0] !== undefined) {
          workers[i].hours.push({ DisplayTime: "", id: id, letterDisplay: "" });
          id = id + 1;
        } else {
          let diffDays: number = new Date(workers[i].exits[j].time).getDate() - prevDay;
          if (diffDays > 1) {
            for (let k = 0; k < diffDays - 1; k++) {
              workers[i].hours.push({ DisplayTime: "", id: id, letterDisplay: "Е" });
              id = id + 1;
              days = days - 1;
            }
          }
          exit = new Date(workers[i].exits[j].time);
          enter = new Date(workers[i].enters[j].time);
          diff = +exit - +enter;
          hours = (diff / (1000 * 60 * 60)) % 24;
          total_hours = total_hours + hours;
          total_days = total_days + 1;
          workers[i].hours.push({
            DisplayTime: hours.toFixed(2),
            id: id,
            letterDisplay: "Я",
          });
          id = id + 1;
          workers[i].total_hours = total_hours.toFixed(2);
          workers[i].total_days = total_days;
          prevDay = new Date(workers[i].exits[j].time).getDate();
          days = days - 1;
        }
      }
    } else {
      for (let j = 0; j < days2; j++) {
        workers[i].hours.push({ DisplayTime: "", id: id, letterDisplay: "" });
        id = id + 1;
      }
    }
  }
}

export default calculateHours;
