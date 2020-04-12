import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./phonebook/phoneReducer";

const store = configureStore({
  reducer: {
    contacts: rootReducer.contacts,
    filter: rootReducer.filter,
  },
});
export default store;
