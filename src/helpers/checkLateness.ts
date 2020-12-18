import { worker } from "../types/user";

function checkLateness(workers: worker[], worker_id: number, time: Date) {
  console.log(worker_id);
  let defaultTime: Date = new Date();
  for (let i = 0; i < workers.length; i++) {
    if (workers[i].id === worker_id) {
      defaultTime = workers[i].start_day;
      break;
    }
  }
  console.log(new Date("0000:00:00" + defaultTime).getMinutes());

  let diffhours: number = 0;
  let diffminutes: number = 0;
  console.log(time);
  console.log(new Date("0000:00:00" + defaultTime).getMinutes());
  diffhours = new Date(time).getHours() - new Date("0000:00:00" + defaultTime).getMinutes();
  diffminutes = new Date(time).getMinutes() - new Date("0000:00:00" + defaultTime).getSeconds();
  if (diffminutes < 0) {
    diffhours = diffhours - 1;
    diffminutes = diffminutes + 60;
  }
  if (diffhours > 4) {
    return diffhours + " часов " + diffminutes + " мин. ";
  }
  if (diffhours > 1) {
    return diffhours + " часа " + diffminutes + " мин. ";
  }
  if (diffhours === 1) {
    return diffhours + " час " + diffminutes + " мин. ";
  }
  return diffminutes + " мин. ";
}

export default checkLateness;
