import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { notification, worker } from "../../../../../types/user";
import Notification from "./notification";

type Props = {
  notifications: notification[];
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

const NotificationsDialog = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" style={{ margin: "0px 10px 0px 10px" }} onClick={handleClickOpen}>
        {"Уведомления " + props.notifications.length}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Уведомления</DialogTitle>
        <DialogContent>
          {props.notifications.map((notification) => (
            <Notification
              notification={notification}
              workers={props.workers}
              deleteNotification={props.deleteNotification}
              token={props.token}
              year={props.year}
              month={props.month}
              history={props.history}
              user_id={props.user_id}
              key={1000 * Math.random()}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NotificationsDialog;
