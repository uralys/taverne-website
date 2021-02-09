import styled, {css} from 'styled-components';

const $Square = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;

  ${props =>
    css`
      background-color: ${props.color};
    `}

  ${props =>
    props.selected &&
    css`
      border: 2px solid white;
    `}

  transition: background-color 0.5s, border 0.2s;
`;

export default $Square;
