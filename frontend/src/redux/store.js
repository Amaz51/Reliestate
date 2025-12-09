import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import propertyReducer from "./slices/propertySlice";
//decides how state should change

const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
  },
});

export default store;