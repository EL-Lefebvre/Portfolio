import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../assets/background.svg";
const Home = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${Background})` }}>
      <Main>
        <TitleDiv>
          <h1>Elodie Lefebvre</h1>
        </TitleDiv>
        <SubContainer>
          <h2>Full Stack Developer</h2>
        </SubContainer>
      </Main>
    </Wrapper>
  );
};
const fade = keyframes`{
    from{
  
      opacity: 0;

    }
    to{
  
        opacity: 1;

      }
   }`;
const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Main = styled.div`

  z-index: 3;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  width: 40vw;
  animation: ${fade} 1s ease-in;
  @media (min-width: 200px) and (max-width:700px){
    width:98vw;

      }
`;
const TitleDiv = styled.div`
letter-spacing: 5px;


`;

const SubContainer = styled.div`

  font-weight: bolder;
  animation: ${fade} 3s ease-in;
`;

export default Home;
