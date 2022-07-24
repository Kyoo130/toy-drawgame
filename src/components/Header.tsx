import React from "react";
import styled from "styled-components";

const HeaderCont = styled.header`
  background-color: #006AD5;
`

const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`

const Header = () => {
  return (
    <HeaderCont>
      <Title>Draw Game</Title>
    </HeaderCont>
  );
};

export default Header;
