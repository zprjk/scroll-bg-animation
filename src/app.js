import {createGlobalStyle} from 'styled-components';
import Content from './content';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

body {
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Content />
    </>
  );
}

export default App;
