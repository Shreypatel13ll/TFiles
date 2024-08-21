import { combineReducers } from "@reduxjs/toolkit";
import fileTreeReducer from "./fileTree/fileTree.slice";

export const rootReducer = combineReducers({
  file: fileTreeReducer,
});