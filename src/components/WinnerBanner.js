import React from 'react';
import banner from '../assets/images/winner.jpg';
import styled from 'styled-components';

const WinnerBannerStyles = styled.picture`
  align-items: center;
  display: flex;
  height: calc(100vh - 120px);
  justify-content: space-around;
  width: 100%;

  .winner-image {
    heigth: 400px;
    width: 400px;
  }

  .winner-image img {
    max-width:100%;
    max-height:100%;
  }

  .player-info img {
    background-color: white;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    padding: 5px;
  }

  p {
    font-size: 40px;
    margin: 10px 0;
  }

  button {
    background-color: red;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-family: starjedi;
    padding: 10px 25px;
  }

  button:hover {
    outline: 1px solid white;
  }
`;

const WinnerBanner = ({ player1Value, player2Value, winner, playAgain}) => {
  return(
    <WinnerBannerStyles>
      <article className="player-info">
        <img src={require(`../assets/images/${player1Value}-icon.png`)} alt={player1Value}/>
        <h2>Player 1 {player1Value} </h2>
      </article>
      <article className="winner-image">
        <img src={banner} alt="winner banner" />
        <p>{ winner == 'none' ? 'is a tie' : winner + ' wins' }</p>
        <button onClick={playAgain}> Revenge </button>
      </article>
      <article className="player-info">
        <img src={require(`../assets/images/${player2Value}-icon.png`)} alt={player2Value}/>
        <h2>Player 2 {player2Value}</h2>
      </article>
    </WinnerBannerStyles>
  )
}

export default WinnerBanner;
