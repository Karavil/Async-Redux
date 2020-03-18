import { UPDATE_MATCHES } from "../actions/dotaActions";

const initialState = {
   proMatches: {
      matches: [],
      loading: false,
      error: false
   }
};

const dotaReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case UPDATE_MATCHES:
         return {
            ...state,
            proMatches: {
               matches: payload,
               loading: false
            }
         };
      default:
         return state;
   }
};

export default dotaReducer;
