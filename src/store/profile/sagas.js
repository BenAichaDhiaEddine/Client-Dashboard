import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { get, update , remove } from "../../helpers/apiMethods";
import { getProfileSuccess, EditProfileSuccess, deleteProfile , deleteProfileSuccess } from "./actions";
import { GET_PROFILE_DETAILES, EDIT_PROFILE , DELETE_PROFILE , DELETE_PROFILE_SUCCESS } from "./actionTypes";
import { toast } from 'react-toastify';
import {logoutUser} from "../actions"
const getUserurl = "/Client/getUserWithtoken";
const url = "/Client/";

function* getProfileApi({ payload }) {
  try {
    let result = yield call(get, getUserurl);
    yield put(getProfileSuccess(result));
    console.log(result)
  } catch (error) { 
    console.log(error)
  }
}

function* deleteProfileApi({ payload }) {
  try {
    let newUrl= url.concat(`${payload.id}`);
    console.log("newUrl : " , newUrl)
    yield call(remove, newUrl);
    yield put(logoutUser(payload.history));
    toast.success('votre compte a été supprimer', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  } catch (error) { 
    console.log(error)
  }
}

function* editProfileApi({ payload}) {
  try {
    console.log("saga :  ",payload)
    const newUrl = url.concat(`${payload.id}`)
    console.log(newUrl)
    const response = yield call(
      update,
      newUrl,
      payload.formData
    );
    console.log(response)
    yield put(EditProfileSuccess(response));
  } catch (error) {
    console.error(error);
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
export function* EditProfile() {
  yield takeEvery(EDIT_PROFILE, editProfileApi);
}
export function* watchGetProfile() {
  yield takeEvery(GET_PROFILE_DETAILES, getProfileApi);
}
export function* watchDeleteProfile() {
  yield takeEvery(DELETE_PROFILE, deleteProfileApi);
}
function* profileSaga() {
  yield all([fork(watchGetProfile), fork(EditProfile) , fork(watchDeleteProfile) ] );
}

export default profileSaga;
