import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import {
  loginSuccess,
  logoutUserSuccess,
  apiError,
  MakeUserLoggedIn,
} from "./actions";
import { post } from "../../../helpers/apiMethods";
import { toast } from "react-toastify";
function* loginUser(action) {
  try {
    const history = action.payload.history;
    const response = yield call(post, "/Client/login", action.payload.payload);
    if (response.token) {
      localStorage.setItem("token", response.token);
      history.push("/")
      toast.success('Vous êtes authentifié', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  } catch (error) {
    console.log(error.message);
    yield put(apiError(error.message));
    toast.error('email ou mot de passe non valide ', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
}
function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("token");
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}
export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

function* authSaga() {
  yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default authSaga;
