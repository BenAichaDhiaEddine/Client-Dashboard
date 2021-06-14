import {
  DELETE_PROFILE,
  DELETE_PROFILE_SUCCESS,
  PROFILE_MODIFIED_FALSE,
  GET_PROFILE_DETAILES,
  GET_PROFILE_DETAILES_SUCCESS,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
} from "./actionTypes";

export const getProfile = () => {
  return {
    type: GET_PROFILE_DETAILES,
  };
};

export const getProfileSuccess = (payload) => {
  return {
    type: GET_PROFILE_DETAILES_SUCCESS,
    payload: payload,
  };
};

export const EditProfile = (data) => {
  return {
    type: EDIT_PROFILE,
    payload: data,
  };
};

export const EditProfileSuccess = (data) => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload: data,
  };
};

export const profileModifierFalse = () => {
  return {
    type: PROFILE_MODIFIED_FALSE,
  };
};

export const deleteProfile = (payload) => {
  return {
    type: DELETE_PROFILE,
    payload: payload,
  };
};

export const deleteProfileSuccess = () => {
  return {
    type: DELETE_PROFILE_SUCCESS,

  };
};
