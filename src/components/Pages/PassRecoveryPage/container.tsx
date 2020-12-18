import { connect } from "react-redux";
import tokenAC from "../../../store/actionCreators/tokenAC";
import Action from "../../../types/Action";
import RecoverPassPage from ".";

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    RecoverPass: (email: string, history: any, url_to_push: string) => {
      dispatch(tokenAC.recoverPass(email, history, url_to_push));
    },
  };
}

const AddressContainer = connect(null, mapDispatchToProps)(RecoverPassPage);

export default AddressContainer;
