import React from "react";

import styled, { createGlobalStyle } from "styled-components";

import DotaMatches from "./components/DotaMatches";

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
   }

   body {
      font-family: 'Raleway', sans-serif;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
`;

const AppContainer = styled.div`
   max-width: 1440px;
   margin: 0 auto;
   padding: 0 20px;
`;
function App() {
   return (
      <>
         <GlobalStyle />
         <AppContainer>
            <DotaMatches />
         </AppContainer>
      </>
   );
}

export default App;
