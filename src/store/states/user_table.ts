import MainPage from "../../types/pages/mainPage";

const user_table: MainPage = {
  didGet: false,
  user: {
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    is_superuser: false,
    table_name: "",
    notifications: [],
    workers: [],
    hours: [],
  },
};

export default user_table;
