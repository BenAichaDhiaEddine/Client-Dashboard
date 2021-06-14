import { DELETE_PROFILE , DELETE_PROFILE_SUCCESS ,PROFILE_MODIFIED_FALSE,GET_PROFILE_DETAILES, GET_PROFILE_DETAILES_SUCCESS, EDIT_PROFILE, EDIT_PROFILE_SUCCESS } from "./actionTypes";

const ProfileInitState = {
  loading: false,
  profileDetailes: {
    firstName: "",
    lastName:"", 
    email : "",  }
};

const ProfileReducer = (state = ProfileInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_PROFILE_DETAILES:
      return { ...state, loading: true };
    case GET_PROFILE_DETAILES_SUCCESS:
      return { ...state, loading: false, profileDetailes: payload };
    case EDIT_PROFILE:
      return { ...state, loadingUpdate: true };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, loadingUpdate: false, profileDetailes: payload , profiledModified : true };
      case PROFILE_MODIFIED_FALSE : 
      return {...state ,profiledModified:false };
      case DELETE_PROFILE : 
      return {...state ,profileDeleted:false }
      case DELETE_PROFILE_SUCCESS : 
      return {...state ,profileDeleted:true }

    default:
      return state;

  }
};


export default ProfileReducer;