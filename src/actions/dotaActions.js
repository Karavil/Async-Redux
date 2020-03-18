import axios from "axios";

export const UPDATE_MATCHES = "UPDATE_PRO_MATCHES";
export const LOADING_MATCHES = "LOADING_MATCHES";
export const ERROR_LOADING_MATCHES = "ERROR_LOADING_MATCHES";

const getProMatches = () => dispatch => {
   axios
      .get("https://api.opendota.com/api/proMatches")
      .then(res => {})
      .catch(err => {
         console.log(err);
      });
};
