import { post } from "helpers/apiMethods";
import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { toast } from 'react-toastify';
//Account Redux states
import { REGISTER_USER } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed } from './actions';

// Is user register successfull then direct plot user in redux.
function* registerUser(action) {
  try {
    const history = action.payload.history
    const response = yield call(post, "/Client/", action.payload.payload);
    toast.success('Votre compte a été créé avec succès!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      history.push("./")
  } catch (error) {
    yield put(registerUserFailed(error));
    toast.error('l adress mail est deja utilisée ', {
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

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;