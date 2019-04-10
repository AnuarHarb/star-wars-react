import React, { Component } from 'react';
import styled from 'styled-components';
import OptionCard from './OptionCard';

const CardContainerStyles = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px 0;
`;

class CardContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardContainerStyles >
        <OptionCard option="lightsaber" clickHandler={this.props.clickHandler} />
        <OptionCard option="blaster" clickHandler={this.props.clickHandler} />
        <OptionCard option="force" clickHandler={this.props.clickHandler} />
      </CardContainerStyles>
    )
  }
}

export default CardContainer;
