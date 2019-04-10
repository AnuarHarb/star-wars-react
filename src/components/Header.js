import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100px;
  background-color: black;
  color: white;
  padding: 10px 0;

  img {
    height: 100%;
  }
`;


const Header = ({logo}) => {
  return(
    <HeaderStyles>
      <img src={logo} alt="Game logo"/>
    </HeaderStyles>
  )
}

export default Header;
