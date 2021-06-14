import {
  GET_OFFRES_DETAILES,
  GET_OFFRES_DETAILES_SUCCESS,
  GET_CREDIT_TYPE,
  GET_CREDIT_TYPE_SUCESS
} from "./actionTypes";

export const getOffres = () => {
  return {
    type: GET_OFFRES_DETAILES,
  };
};

export const getOffresSuccess = (payload) => {
  return {
    type: GET_OFFRES_DETAILES_SUCCESS,
    payload: payload,
  };
};

export const getCreditType = () => {
  return {
    type: GET_CREDIT_TYPE,
  };
}
  export const getCreditTypeSuccess = (payload) => {
    return {
      type: GET_CREDIT_TYPE_SUCESS,
      payload: payload,
    };
};


