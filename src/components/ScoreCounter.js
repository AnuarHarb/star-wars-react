import React from 'react';
import styled from 'styled-components';

const ScoreCounterStyles = styled.h2`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 35px;
  }

  span {
      color: yellow;
      font-size: 40px;
      vertical-align: baseline;
  }

  .versus {
    font-size: 25px;
  }
`;

const ScoreCounter = ({scorePlayer1, scorePlayer2}) => {
  return (
    <ScoreCounterStyles>
      <div>
        <h3>Player1 <span>{scorePlayer1}</span></h3>
      </div>
      <h3 className="versus">vs</h3>
      <div>
        <h3>Player2 <span>{scorePlayer2}</span></h3>
      </div>
    </ScoreCounterStyles>
  )
}

export default ScoreCounter;
