import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <div>
      <Container>
        <Menu></Menu>
        <Main>
          <Navbar></Navbar>
          <Wrapper>Video Cards</Wrapper>
        </Main>
      </Container>
    </div>
  );
}

export default App;
