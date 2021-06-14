import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { get, update , remove } from "../../helpers/apiMethods";
import { getBanquesSuccess} from "./actions";
import {GET_BANQUES_DETAILES } from "./actionTypes";
import { toast } from 'react-toastify';
const url = "/superAdmin/corporate/config/";

function* getBanqueseApi({ payload }) {
  try {
    let result = yield call(get, url);
    yield put(getBanquesSuccess(result));
  } catch (error) { 
    console.log(error)
  }
}

export function* watchGetBanques() {
  yield takeEvery(GET_BANQUES_DETAILES, getBanqueseApi);
}

function* banquesSaga() {
  yield all([fork(watchGetBanques)] );
}

export default banquesSaga;
