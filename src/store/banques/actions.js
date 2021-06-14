import {
  GET_BANQUES_DETAILES,
  GET_BANQUES_DETAILES_SUCCESS,
} from "./actionTypes";

export const getBanques = () => {
  return {
    type: GET_BANQUES_DETAILES,
  };
};

export const getBanquesSuccess = (payload) => {
  return {
    type: GET_BANQUES_DETAILES_SUCCESS,
    payload: payload,
  };
};

