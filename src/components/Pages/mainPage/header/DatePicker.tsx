import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DatePicker } from "@material-ui/pickers/DatePicker/DatePicker";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import React from "react";
import style from "./style.module.css";

type Props = {
  className?: string;

  fromDateStr: string;
  toDateStr: string;

  isDisabled: boolean;
  token: string;
  user_id: number;
  history: any;
  setMonth: (date: Date, token: string, user_id: string, history: any, url: string) => void;
};

const Picker = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    props.setMonth(date!, props.token, "" + props.user_id, props.history, "/main");
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <Button
        style={{ margin: "10px 10px 10px 10px" }}
        onClick={() => {
          if (!props.isDisabled) {
            setOpen(!open);
          }
        }}
      >
        {props.fromDateStr + " - " + props.toDateStr}
      </Button>

      <DatePicker
        autoOk={true}
        open={open}
        variant="dialog"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling={false}
        onClose={() => {
          setOpen(false);
        }}
        TextFieldComponent={() => <TextField className={style.date_picker} variant="outlined" type="hidden" value="" />}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Picker;
