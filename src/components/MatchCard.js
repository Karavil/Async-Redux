import React from "react";
import styled from "styled-components";

const Card = styled.div`
   border: 1px solid #eaeaea;
   border-radius: 5px;

   padding: 5px 10px;

   margin: 10px 0;
`;

const MatchCard = ({ match }) => {
   return (
      <Card>
         <h2>
            {match.radiant_name || "Radiant"} vs {match.dire_name || "Dire"}
         </h2>
         <p>
            Score: {match.radiant_score} : {match.dire_score}
         </p>
         <p>League: {match.league_name}</p>
      </Card>
   );
};

export default MatchCard;
