import { connect } from "react-redux";
import tokenAC from "../../../store/actionCreators/tokenAC";
import Action from "../../../types/Action";
import checkCodePage from ".";

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    CheckRecoveryCode: (code: string, history: any, url_to_push: string) => {
      dispatch(tokenAC.checkRecoveryCode(code, history, url_to_push));
    },
  };
}

const AddressContainer = connect(null, mapDispatchToProps)(checkCodePage);

export default AddressContainer;
