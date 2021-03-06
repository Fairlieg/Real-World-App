import { combineReducers } from "redux";
import app from "./app";
import user from "./user";
import users from "./users";
import transactions from "./transactions";
import notifications from "./notifications";
import bankaccounts from "./bankaccounts";

const rootReducer = combineReducers({
  app,
  user,
  transactions,
  users,
  notifications,
  bankaccounts
});

export type IRootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;
