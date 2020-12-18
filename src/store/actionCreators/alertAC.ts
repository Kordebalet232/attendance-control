import ACTION from "./ACTION";

function showAlert(text: string) {
  return {
    type: ACTION.SHOW_ALERT,
    text: text,
  };
}

function hideAlert() {
  return {
    type: ACTION.HIDE_ALERT,
  };
}

const alertAC = {
  showAlert: showAlert,
  hideAlert: hideAlert,
};

export default alertAC;
