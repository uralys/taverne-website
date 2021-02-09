import React from 'react';
import Square from '../../components/square';
import RGB from '../../components/rgb';
import Line from '../../components/line';

// -----------------------------------------------------------------------------

const UsingHookstores = props => {
  return (
    <>
      <h2>Hookstores demo</h2>
      <p>{`a Square`}</p>
      <Square color="#75AF3B" />
      <p>{`an RGB`}</p>
      <RGB />
      <p>{`a Line`}</p>
      <Line />
      <p>{`an array of Lines`}</p>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </>
  );
};

export default UsingHookstores;
