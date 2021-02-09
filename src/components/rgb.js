import React from 'react';
import styled from 'styled-components';
import Square from './square';

// -----------------------------------------------------------------------------

const $RGB = styled.div`
  width: 100%;
  max-width: 160px;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

// -----------------------------------------------------------------------------

const RGB = props => {
  const {r, g, b} = props;

  return (
    <$RGB>
      <Square color="#CE3B1E" selected={r} />
      <Square color="#75AF3B" selected={g} />
      <Square color="#4C7FB5" selected={b} />
    </$RGB>
  );
};

// -----------------------------------------------------------------------------

export default RGB;
