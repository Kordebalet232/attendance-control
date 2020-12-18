import formatHeaderDateToStr from "../../helpers/formatHeaderDateToStr";
import Action from "../../types/Action";
import Header from "../../types/header";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/header";

const months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function header(state: Header = initialState, action: Action): Header {
  switch (action.type) {
    case ACTION.SET_MONTH:
      const first_day: Date = new Date(new Date(action.payload).setDate(1));
      const last_day: Date = new Date(
        new Date(action.payload).setDate(
          new Date(action.payload).getFullYear() % 4 === 0 && new Date(action.payload).getMonth() === 2
            ? 29
            : months[new Date(action.payload).getMonth()]
        )
      );
      const month: number = new Date(action.payload).getMonth();
      const year: number = new Date(action.payload).getFullYear();
      const days: number[] = [];
      for (let i = 1; i < last_day.getDate() + 1; i++) {
        days.push(i);
      }
      return {
        ...state,

        fromDate: first_day,
        toDate: last_day,
        month: month,
        year: year,
        fromDateStr: formatHeaderDateToStr(first_day, 1),
        toDateStr: formatHeaderDateToStr(last_day, 2),
        daysOfMonth: days,
      };
  }

  return state;
}

export default header;
