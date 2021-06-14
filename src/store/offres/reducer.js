import { GET_OFFRES_DETAILES , GET_OFFRES_DETAILES_SUCCESS,GET_CREDIT_TYPE,GET_CREDIT_TYPE_SUCESS} from "./actionTypes";

const OffresInitState = {
  loading: false,
  creditTypes:{
  },
  offresDetails:{
  },
};

const offresReducer = (state = OffresInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_OFFRES_DETAILES:
      return { ...state, loading: true };
    case GET_OFFRES_DETAILES_SUCCESS:
      return { ...state, loading: false, offresDetails: payload };
      case GET_CREDIT_TYPE:
        return { ...state, loading: true};
        case GET_CREDIT_TYPE_SUCESS:
          return { ...state, loading: false , creditTypes : payload};

    default:
      return state;

  }
};


export default offresReducer;