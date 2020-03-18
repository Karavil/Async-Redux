import React from "react";
import styled from "styled-components";

const Card = styled.div`
   border: 1px solid grey;
   padding: 5px;
`;

const MatchCard = ({ match }) => {
   return (
      <Card>
         <h1>
            {match.radiant_name} vs {match.dire_name}
         </h1>
         <p>
            Score: {match.radiant_score} : {match.dire_score}
         </p>
         <p>League: {match.league_name}</p>
      </Card>
   );
};

export default MatchCard;
