import React from 'react';
import styled from 'styled-components';

const OptionCard = ({option, clickHandler}) => {

  const OptionCardStyles = styled.article`
    cursor: pointer;
    color: transparent;
    width: 400px;
    height: 150px;
    display:flex;
    margin: 10px 0;
    justify-content:center;
    align-items: center;
    transition: all .6s;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-image: url(${require('../assets/images/' + option + '.jpg')});
      background-size: cover;
      transition: all .6s;
    }

    :hover {
      color: white;
      outline: 5px solid white;
    }

    :hover::after {
      filter: blur(1px) opacity(.6);;
    }

    h2 {
      z-index: 2;
    }
  `

  return(
    <OptionCardStyles onClick={() => clickHandler(option)}>
      <h2>{option}</h2>
    </OptionCardStyles>
  )
}

export default OptionCard;
