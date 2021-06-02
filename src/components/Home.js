import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../assets/background.svg";
const Home = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${Background})` }}>
      <Main>
        <Title>Elodie Lefebvre</Title>
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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


`;
const Main = styled.div`
  z-index: 3;

  animation: ${fade} 1s ease-in;
`;
const Title = styled.h2`
color:white;
`;
export default Home;
