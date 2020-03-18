import axios from "axios";

export const UPDATE_MATCHES = "UPDATE_PRO_MATCHES";
export const LOADING_MATCHES = "LOADING_MATCHES";
export const LOADED_MATCHES = "DONE_LOADING_MATCHES";
export const ERROR_LOADING_MATCHES = "ERROR_LOADING_MATCHES";

export const getProMatches = () => dispatch => {
   console.log("GETTING MATCHES");
   dispatch({ type: LOADING_MATCHES });
   axios
      .get("https://api.opendota.com/api/proMatches")
      .then(res => {
         console.log("GOT MATCHES", res.data);
         const matches = res.data;
         dispatch({ type: LOADED_MATCHES });
         dispatch({ type: UPDATE_MATCHES, payload: matches });
      })
      .catch(err => {
         console.log("ERROR:", err);
         dispatch({ type: ERROR_LOADING_MATCHES });
      });
};
