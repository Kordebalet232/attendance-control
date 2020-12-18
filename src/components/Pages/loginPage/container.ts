import { CombinedState } from "redux";
import { connect } from "react-redux";
import tokenAC from "../../../store/actionCreators/tokenAC";
import Action from "../../../types/Action";
import logPage from ".";
import Header from "../../../types/header";
import Token from "../../../types/token";

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getTokenLog: (email: string, password: string, history: any, url_to_push: string, year: number, month: number) => {
      dispatch(tokenAC.getTokenLog(email, password, history, url_to_push, year, month));
    },
  };
}
function mapStateToProps(
  state: CombinedState<{
    header: Header;
    token: Token;
  }>
) {
  return {
    isAuthed: state.token.didGet,
    month: state.header.month,
    year: state.header.year,
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(logPage);

export default AddressContainer;
