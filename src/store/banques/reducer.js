import { GET_BANQUES_DETAILES , GET_BANQUES_DETAILES_SUCCESS} from "./actionTypes";

const BanquesInitState = {
  loading: false,
  banquesDetails:{
  }
};

const banquesReducer = (state = BanquesInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_BANQUES_DETAILES:
      return { ...state, loading: true };
    case GET_BANQUES_DETAILES_SUCCESS:
      return { ...state, loading: false, banquesDetails: payload };
    default:
      return state;

  }
};


export default banquesReducer;