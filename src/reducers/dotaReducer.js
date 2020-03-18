import {
   UPDATE_MATCHES,
   LOADING_MATCHES,
   ERROR_LOADING_MATCHES,
   LOADED_MATCHES
} from "../actions/dotaActions";

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
               matches: payload
            }
         };
      case LOADING_MATCHES:
         return {
            ...state,
            proMatches: {
               ...state.proMatches,
               loading: true,
               error: false
            }
         };
      case LOADED_MATCHES:
         return {
            ...state,
            proMatches: {
               ...state.proMatches,
               loading: false,
               error: false
            }
         };
      case ERROR_LOADING_MATCHES:
         return {
            ...state,
            proMatches: {
               ...state.proMatches,
               loading: false,
               error: true
            }
         };
      default:
         return state;
   }
};

export default dotaReducer;
