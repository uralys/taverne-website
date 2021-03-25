import React from 'react';
import styled, {css} from 'styled-components';
import {device} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

const $Button = styled.div`
  font-size: 12px;
  border-radius: 3px;
  border: 0.5px solid #ededed;
  padding: 4px;
`;

const $Square = styled.div`
  border-radius: 5px;
  margin: 0 2px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  color: #fff;
  box-sizing: border-box;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  width: 100px;
  height: 100px;

  @media ${device.tablet} {
    width: 120px;
    height: 120px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  ${props =>
    css`
      background-color: ${props.color};
    `}
`;

const $Counter = styled.p`
  font-size: 35px;
`;

const $Note = styled.p`
  font-size: 11px;
`;

// -----------------------------------------------------------------------------

class Square extends React.Component {
  constructor() {
    super();
    this.nbRenders = 0;
  }

  render() {
    const {onClick, color, clickCount} = this.props;
    if (clickCount === undefined) {
      return <h5>clickCount is not plugged</h5>;
    }

    this.nbRenders++;

    return (
      <$Square color={color} onClick={onClick}>
        <$Counter>{clickCount}</$Counter>
        <$Button>Increment</$Button>
        <$Note>renders: {this.nbRenders}</$Note>
      </$Square>
    );
  }
}

// -----------------------------------------------------------------------------

export default Square;
