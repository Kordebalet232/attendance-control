import { worker } from "../types/user";

const checkVacations = (workers: worker[], year: number, month: number) => {
  const months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days: number = 0;
  days = months[month];
  if (year % 4 === 0 && month === 2) {
    days = days + 1;
  }
  for (let i = 0; i < workers.length; i++) {
    console.log(workers[i].hours);
    for (let j = 0; j < workers[i].vacations.length; j++) {
      let start_date: Date = new Date(workers[i].vacations[j].start_date);
      let end_date: Date = new Date(workers[i].vacations[j].end_date);
      console.log(start_date.getMonth() - month);
      console.log(start_date.getMonth() + " " + month);
      if (start_date.getMonth() - month === 0) {
        // начало в рассматриваемом месяце
        if (end_date.getMonth() - month === 0) {
          // весь отпуск в рассматриваемом месяце
          console.log("ТУТА");
          for (let k = start_date.getDate(); k <= end_date.getDate(); k++) {
            console.log(k);
            console.log(workers[i].hours);
            workers[i].hours[k - 1] = { DisplayTime: "", id: workers[i].hours[k - 1].id, letterDisplay: "О" };
          }
        } else {
          for (let k = start_date.getDate(); k < days; k++) {
            // начало в рассатриваемом месяце, конец - в следующем
            workers[i].hours[k - 1] = { DisplayTime: "", id: workers[i].hours[k - 1].id, letterDisplay: "О" };
          }
        }
      } else {
        if (end_date.getMonth() - month === 0) {
          // конец в рассматриваемом месяце, начало - в предыдущем
          for (let k = 0; k <= end_date.getDate(); k++) {
            console.log("Тут?");
            workers[i].hours[k] = { DisplayTime: "", id: workers[i].hours[k].id, letterDisplay: "О" };
          }
        }
      }
    }
  }
};

export default checkVacations;
