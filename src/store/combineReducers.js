import { combineReducers } from "redux";
import { carListReducer } from "./car-list";

export const rootReducer = combineReducers({ carListReducer });
