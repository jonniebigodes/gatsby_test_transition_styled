import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 800;
  color: white;
`;

const Heading = styled.h1`
  font-family: "URWAccidalia";
  font-size: 50px;
  color: white;
  text-align: center;
  z-index: 805;
`;

const HomeButton = styled(AniLink)`
  font-family: "URWAccidalia";
  font-size: 30px;
  color: white;
  text-align: center;
  margin-top: 50px;
  z-index: 806;
  background: none;
  border: none;
  text-decoration: none;
  opacity: 1;
`;

const IndexPage = () => {
  return (
    <Container>
      <Heading>This is the index</Heading>
      <HomeButton fade to="/page2/">
        Go to a diferent page
      </HomeButton>
      <HomeButton fade to="/page3/">
        Go to a page with a canvas element
      </HomeButton>
      <HomeButton fade to="/banana/">
          Go to non existing page
      </HomeButton>
    </Container>
  );
};

export default IndexPage;