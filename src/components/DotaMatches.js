import React, { useEffect } from "react";

import { getProMatches } from "../actions/dotaActions";
import { useDispatch, useSelector } from "react-redux";

const DotaMatches = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProMatches());
   }, []);

   return <div>test</div>;
};

export default DotaMatches;
