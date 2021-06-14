import { combineReducers } from "redux";

import Login from "./auth/login/reducer";
import Account from "./auth/registre/reducer";
import ProfileReducer from "./profile/reducer";
import Banques from "./banques/reducer"
import Offres from "./offres/reducer"
const rootReducer = combineReducers({
  Login,
  Account,
  Profile: ProfileReducer,
  Banques,
  Offres
  });

export default rootReducer;
