import { all } from "redux-saga/effects";

//public
import AccountSaga from "./auth/registre/saga";
import AuthSaga from "./auth/login/saga";
import profileSaga from "./profile/sagas";
import banqueSaga from "./banques/sagas";
import offresSaga from "./offres/sagas";

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    AuthSaga(),
    profileSaga(),
    banqueSaga(),
    offresSaga(),
  ]);
}
