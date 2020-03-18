import React, { useEffect } from "react";

import MatchCard from "./MatchCard";

import { getProMatches } from "../actions/dotaActions";
import { useDispatch, useSelector } from "react-redux";

const DotaMatches = () => {
   const dispatch = useDispatch();
   const proMatches = useSelector(state => state.proMatches);

   useEffect(() => {
      dispatch(getProMatches());
   }, []);

   const MatchCards = proMatches.matches.map(match => (
      <MatchCard match={match} />
   ));

   return (
      <>
         {proMatches.error ? <h1>Error loading matches. :(</h1> : <></>}
         {proMatches.loading && !proMatches.error ? (
            <h1>Matches loading...</h1>
         ) : (
            <>
               <h1>Latest Dota 2 Pro Matches:</h1>
               {MatchCards}
            </>
         )}
      </>
   );
};

export default DotaMatches;
