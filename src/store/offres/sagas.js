import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { get, update , remove } from "../../helpers/apiMethods";
import { getOffresSuccess ,getCreditType , getCreditTypeSuccess} from "./actions";
import {GET_OFFRES_DETAILES , GET_CREDIT_TYPE,GET_CREDIT_TYPE_SUCESS } from "./actionTypes";
import { toast } from 'react-toastify';
const url = "/functionalAdmin/requestConfig/getRequestConfigInfo";
const creditTypesUrl = "/functionalAdmin/requestConfig/getcreditType"

function* getOffreseApi({ payload }) {
  try {
    console.log("sagaaaa")
    let result = yield call(get, url);
    yield put(getOffresSuccess(result));
  } catch (error) { 
    console.log(error)
  }
}

function* getCreditTypesApi({ payload }) {
  try {
    let result = yield call(get, creditTypesUrl);
    yield put(getCreditTypeSuccess(result));
  } catch (error) { 
    console.log(error)
  }
}

export function* watchGetCreditTypes() {
  yield takeEvery(GET_CREDIT_TYPE, getCreditTypesApi);
}

export function* watchGetOffres() {
  yield takeEvery(GET_OFFRES_DETAILES, getOffreseApi);
}

function* offresSaga() {
  yield all([fork(watchGetOffres) , fork(watchGetCreditTypes)] );
}

export default offresSaga;
