import React, { Component } from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import ScoreCounter from './ScoreCounter';
import WinnerBanner from './WinnerBanner';
import background from '../assets/images/dark-background.png';

const GameContainerStyles = styled.section`
  color: white;
  text-align: center;
  padding: 0 100px;

  .choosing-section {
    box-sizing: border-box;
    background-image: url(${background});
    background-size: cover;
    height: calc(100vh - 120px);
    padding: 10px 0;
  }

  .main {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      status: 'choosing',
      player1Value: '',
      player2Value: '',
      winner: '',
      scorePlayer1: 0,
      scorePlayer2: 0,

    };

    this.play = this.play.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  play(clickValue) {
    const options = ['lightsaber', 'blaster', 'force'];
    const player1Value = clickValue;
    const player2Value = options[Math.floor(Math.random()*2)];
    this.getWinner(player1Value, player2Value);
  }

  getWinner(player1Value, player2Value) {
    let winner;
    if(player1Value === 'lightsaber' && player2Value === 'blaster' ||
       player1Value === 'blaster' && player2Value === 'force' ||
       player1Value === 'force' && player2Value === 'lightsaber') {
      winner = 'player1';
    } else if(player2Value === 'lightsaber' && player1Value === 'blaster' ||
              player2Value === 'blaster' && player1Value === 'force' ||
              player2Value === 'force' && player1Value === 'lightsaber') {
      winner = 'player2'
    } else {
      winner = 'none';
    }
    this.showWinner(player1Value, player2Value, winner);
    this.updateScore(winner);
  }

  showWinner(player1Value, player2Value, winner) {
    this.setState({
      status: 'Finished',
      player1Value: player1Value,
      player2Value: player2Value,
      winner: winner,
    })
  }

  updateScore(winner) {
    if(winner === 'player1') {
      this.setState({
        scorePlayer1: this.state.scorePlayer1 + 1
      });
    } else if(winner === 'player2') {
      this.setState({
        scorePlayer2: this.state.scorePlayer2 + 1
      });
    }
  }

  playAgain() {
    this.setState({
      status: 'choosing',
    })
  }

  render() {
    return(
      <GameContainerStyles>
        {this.state.status === 'choosing' ? (
          <section className="choosing-section">
            <h1>Rock, paper, scissors</h1>
            <section className="main">
              <CardContainer
                clickHandler={this.play}
              />
              <ScoreCounter
                scorePlayer1={this.state.scorePlayer1}
                scorePlayer2={this.state.scorePlayer2}
              />
            </section>
            <h2>old Republic Edition</h2>
          </section>
        ): (
          <WinnerBanner
            player1Value={this.state.player1Value}
            player2Value={this.state.player2Value}
            winner={this.state.winner}
            playAgain={this.playAgain}
          />
        )}
      </GameContainerStyles>
    )
  }
}

export default GameContainer;
