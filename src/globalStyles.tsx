import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 4px; 
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color}; 
    border-radius: 6px; 
   
  }
  
  ::-webkit-scrollbar-track {
    margin-top:5.6rem;
    background-color: ${(props) => props.theme.pageBackground};
  }
  
`;

export default GlobalStyle;
