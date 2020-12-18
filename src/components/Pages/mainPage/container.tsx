import { connect } from "react-redux";
import Action from "../../../types/Action";
import MainPage from ".";
import { CombinedState } from "redux";
import MainPageT from "../../../types/pages/mainPage";
import Header from "../../../types/header";
import headerAC from "../../../store/actionCreators/headerAC";
import Token from "../../../types/token";
import User_tableAC from "../../../store/actionCreators/user_tableAC";
import Alert from "../../../types/alert";
import alertAC from "../../../store/actionCreators/alertAC";

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    setMonth: (date: Date, token: string, user_id: string, history: any, url: string) => {
      dispatch(headerAC.setMonth(date));
      dispatch(User_tableAC.getUser_Table(token, user_id, history, url, date.getFullYear(), date.getMonth()));
    },
    CreateWorker: (
      token: string,
      first_name: string,
      second_name: string,
      patronymic: string,
      hour_norm: string,
      vacation_days: string,
      user_id: number,
      history: any,
      url: string,
      start_day: string,
      end_day: string,
      year: number,
      month: number
    ) => {
      dispatch(
        User_tableAC.CreateNewWorker(
          token,
          first_name,
          second_name,
          patronymic,
          hour_norm,
          vacation_days,
          user_id,
          history,
          url,
          start_day,
          end_day,
          year,
          month
        )
      );
    },
    deleteWorker: (
      token: string,
      worker_id: number,
      user_id: number,
      history: any,
      url: string,
      year: number,
      month: number
    ) => {
      dispatch(User_tableAC.DeleteWorker(token, worker_id, user_id, history, url, year, month));
    },
    createVacation: (token: string, worker_id: number, start_date: Date, end_date: Date) => {
      dispatch(User_tableAC.CreateVacation(token, start_date, end_date, worker_id));
    },
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
    ) => {
      dispatch(
        User_tableAC.deleteNotification(
          token,
          id,
          isGap,
          user_id,
          history,
          url,
          year,
          month,
          worker_id,
          reason,
          document,
          gap_id
        )
      );
    },
    alertCreator: (text: string) => {
      dispatch(alertAC.showAlert(text));
      setTimeout(() => {
        dispatch(alertAC.hideAlert());
      }, 3000);
    },
  };
}

function mapStateToProps(
  state: CombinedState<{
    mainPage: MainPageT;
    header: Header;
    token: Token;
    alert: Alert;
  }>
) {
  return {
    table_name: state.mainPage.user.table_name,
    workers: state.mainPage.user.workers,
    days: state.header.daysOfMonth,
    fromDateStr: state.header.fromDateStr,
    toDateStr: state.header.toDateStr,
    token: state.token.token,
    user_id: state.token.id,
    textAlert: state.alert.text,
    isAuthed: state.token.didGet,
    year: state.header.year,
    month: state.header.month,
    notifications: state.mainPage.user.notifications,
  };
}
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainContainer;
