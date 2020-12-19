import { worker } from "../types/user";

function checkGaps(workers: worker[]): void {
  for (let i = 0; i < workers.length; i++) {
    workers[i].total_gaps = [];
    let total_gaps = [0, 0, 0, 0];
    for (let j = 0; j < workers[i].gaps.length; j++) {
      console.log(new Date(workers[i].gaps[j].date).getDate());
      console.log(workers[i].hours);
      switch (workers[i].gaps[j].reason) {
        case 1: {
          workers[i].hours[new Date(workers[i].gaps[j].date).getDate() - 1].letterDisplay = "Е";
          total_gaps[0] = total_gaps[0] + 1;
          break;
        }
        case 2: {
          workers[i].hours[new Date(workers[i].gaps[j].date).getDate() - 1].letterDisplay = "Б";
          total_gaps[1] = total_gaps[1] + 1;
          break;
        }
        case 3: {
          workers[i].hours[new Date(workers[i].gaps[j].date).getDate() - 1].letterDisplay = "ОТ";
          total_gaps[2] = total_gaps[2] + 1;
          break;
        }
        case 4: {
          workers[i].hours[new Date(workers[i].gaps[j].date).getDate() - 1].letterDisplay = "К";
          total_gaps[3] = total_gaps[3] + 1;
          break;
        }
        default: {
          workers[i].hours[new Date(workers[i].gaps[j].date).getDate() - 1].letterDisplay = "Н";
        }
      }
      console.log(total_gaps);
    }
    workers[i].total_gaps = [
      "E: " + total_gaps[0],
      "Б: " + total_gaps[1],
      "ОТ: " + total_gaps[2],
      "К: " + total_gaps[3],
    ];
  }
}

export default checkGaps;
