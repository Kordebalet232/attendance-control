import { worker } from "../types/user";

function findWorker(workers: worker[], name: string, second_name: string, patronymic: string): number {
  for (let i = 0; i < workers.length; i++) {
    if (
      workers[i].first_name === name &&
      workers[i].second_name === second_name &&
      workers[i].patronymic === patronymic
    )
      return workers[i].id;
  }
  return -1;
}

export default findWorker;
