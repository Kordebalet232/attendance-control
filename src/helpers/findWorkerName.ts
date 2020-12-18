import { worker } from "../types/user";

function findWorkerName(workers: worker[], id: number): string {
  for (let i = 0; i < workers.length; i++) {
    if (workers[i].id === id) return workers[i].first_name + " " + workers[i].second_name + " " + workers[i].patronymic;
  }
  return "";
}

export default findWorkerName;
