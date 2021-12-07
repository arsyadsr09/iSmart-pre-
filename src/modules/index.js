import { combineReducers } from "redux"

import general from "./general/reducer"

export const rootReducer = combineReducers({
  general,
})
