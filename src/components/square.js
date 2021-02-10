import React from 'react';
import styled, {css} from 'styled-components';

// -----------------------------------------------------------------------------

const $Square = styled.div`
  border-radius: 5px;
  margin: 0 2px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  max-width: 100px;
  height: 60px;

  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */

  p {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }

  ${props =>
    css`
      background-color: ${props.color};
    `}

  ${props =>
    props.selected &&
    css`
      border: 2px solid white;

      p {
        font-size: 20px;
        font-weight: bold;
      }
    `}

  transition: font-size 0.5s, border 0.2s;
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
      return <h5>todo</h5>;
    }

    this.nbRenders++;

    return (
      <$Square color={color} onClick={onClick}>
        <p>clicks: {clickCount}</p>
        <p>renders: {this.nbRenders}</p>
      </$Square>
    );
  }
}

// -----------------------------------------------------------------------------

export default Square;
