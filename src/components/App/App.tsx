import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../Pages/loginPage/container";
import MainPage from "../Pages/mainPage/container";
import RecoverPassPage from "../Pages/PassRecoveryPage/container";
import RegistrationPage from "../Pages/RegistrationPage/container";
import ResetCodePage from "../Pages/RecoveryCodePage/container";
import ResetPasswordPage from "../Pages/ResetPasswordPage/container";
import style from "./style.module.css";

type Props = {
  history: any;
};

function App(props: Props) {
  return (
    <div className={style.app}>
      <Switch>
        <Route exact path="/" component={() => <LoginPage history={props.history} />} />
        <Route path="/registration" component={() => <RegistrationPage history={props.history} />} />
        <Route path="/recovery/code/new_password" component={() => <ResetPasswordPage history={props.history} />} />
        <Route path="/recovery/code" component={() => <ResetCodePage history={props.history} />} />
        <Route path="/recovery" component={() => <RecoverPassPage history={props.history} />} />
        <Route path="/main" component={() => <MainPage history={props.history} />} />
      </Switch>
    </div>
  );
}

export default App;
