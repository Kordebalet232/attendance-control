import { Button, Input } from "@material-ui/core";
import React from "react";
import checkLateness from "../../../../../../helpers/checkLateness";
import findWorkerName from "../../../../../../helpers/findWorkerName";
import { notification, worker } from "../../../../../../types/user";

type Props = {
  notification: notification;
  workers: worker[];
  token: string;
  year: number;
  month: number;
  user_id: number;
  history: any;
  deleteNotification: (
    token: string,
    id: number,
    isGap: boolean,
    user_id: number,
    history: any,
    url: string,
    year: number,
    month: number,
    worker_id?: number,
    reason?: string,
    document?: string,
    gap_id?: number
  ) => void;
};
const Notification = (props: Props) => {
  const handleOk = (reason?: string, document?: string, gap_id?: number) => {
    props.deleteNotification(
      props.token,
      props.notification.id,
      props.notification.is_gap,
      props.user_id,
      props.history,
      "/main",
      props.year,
      props.month,
      props.notification.worker,
      reason,
      document,
      gap_id
    );
  };

  const workerDisplay: string = findWorkerName(props.workers, props.notification.worker);

  let lateness: string = "";
  if (!props.notification.is_gap) {
    lateness = checkLateness(props.workers, props.notification.worker, props.notification.date);
  }
  return (
    <div>
      {props.notification.is_gap ? (
        <div>
          <p>{"Сотрудник " + workerDisplay + " не пришел на роботу " + props.notification.date}</p>
          <div>
            <p>Причина: </p>
            <select id="reason" defaultValue="выходной">
              <option value="1">Выходной</option>
              <option value="2">Больничный</option>
              <option value="3">Отпуск</option>
              <option value="4">Командировка</option>
            </select>
          </div>
          <div>
            <Input id="document" type="file" />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                handleOk(
                  (document.getElementById("reason") as HTMLInputElement)!.value,
                  (document.getElementById("document") as HTMLInputElement)!.value,
                  props.notification.gap
                );
              }}
            >
              Ок
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p>{"Сотрудник " + workerDisplay + " опоздал на работу  на " + lateness}</p>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              handleOk();
            }}
          >
            Ок
          </Button>
        </div>
      )}
    </div>
  );
};

export default Notification;
