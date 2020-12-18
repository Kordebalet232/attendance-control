import { worker, vacation } from "../types/user";

function checkDates(start_date: string, end_date: string, id: number, workers: worker[]): number {
  let vacation_days = 0;
  let vacations: vacation[] = [];
  for (let i = 0; i < workers.length; i++) {
    if (workers[i].id === id) {
      vacation_days = workers[i].vacation_days;
      vacations = workers[i].vacations;
    }
    break;
  }
  const start = new Date(start_date);
  const end = new Date(end_date);
  if (start > end) {
    return -1;
  }
  if (start < new Date(Date.now()) || end < new Date(Date.now())) {
    return -1;
  }
  if ((end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24 > vacation_days) {
    return -2;
  }
  for (let i = 0; i < vacations.length; i++) {
    if (start <= new Date(vacations[i].end_date) && start >= new Date(vacations[i].start_date)) {
      return -1;
    }
    if (end >= vacations[i].start_date && end <= vacations[i].end_date) {
      return -1;
    }
    if (start <= vacations[i].start_date && end >= vacations[i].end_date) {
      return -1;
    }
  }
  return 1;
}

export default checkDates;
