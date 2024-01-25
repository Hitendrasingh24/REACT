import './App.css';
import Div from './components/Div';
import styled from 'styled-components';

function App() {
  return (
      <>
      <Container>
      <Div/>
      </Container>
      </>
  );
}

const Container =styled.div`
background-color:grey;
height : 100vh;
display:flex;
width:100vw;
justify-content : center;
align-items:center;
`
export default App;

