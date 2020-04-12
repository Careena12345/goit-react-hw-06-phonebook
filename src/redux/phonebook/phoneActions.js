import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const addPhone = createAction("contact/add", function prepare(name, number) {
  return {
    payload: {
      id: uuid(),
      name,
      number,
    },
  };
});

const removePhone = createAction("contact/remove");

const filterPhone = createAction("contact/filter");

export default { addPhone, removePhone, filterPhone };
