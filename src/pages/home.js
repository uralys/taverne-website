import React from 'react';

import Markdown from '../components/markdown';
import sampleMd from '../resources/sample.md';
import pitchIntroMd from '../resources/pitch-intro.md';
import pitchDetailsMd from '../resources/pitch-details.md';
import styled from 'styled-components';

import createLaTaverne from 'taverne';
import {Taverne, useTaverne} from 'taverne/hooks';
import {primary} from '../style/colors';
import {device} from '../style/breakpoints';

// -----------------------------------------------------------------------------

const $Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  pre {
    font-size: 12px;
  }

  @media ${device.tablet} {
    pre {
      font-size: 16px;
    }
  }
`;

const $Sample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const $Button = styled.div`
  font-size: 12px;
  border-radius: 3px;
  border: 0.5px solid #ededed;
  padding: 4px;
`;

const $Square = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${primary};
  color: #ededed;
  border-radius: 10px;
  cursor: pointer;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;

  p {
    margin: 0;
    padding: 0;
  }
`;

// -----------------------------------------------------------------------------

const App = () => {
  const {dispatch, pour} = useTaverne();
  const clickCount = pour('counter.clickCount');

  const increment = () => {
    dispatch({
      type: 'increment'
    });
  };

  return (
    <$Square onClick={increment}>
      <p>{clickCount}</p>
      <$Button>Increment</$Button>
    </$Square>
  );
};

const Demo = () => {
  const onIncrement = {
    on: 'increment',
    reduce: (state, payload) => {
      state.clickCount++;
    }
  };

  const {dispatch, store} = createLaTaverne({
    counter: {
      initialState: {clickCount: 0},
      reactions: [onIncrement]
    }
  });

  return (
    <Taverne dispatch={dispatch} store={store}>
      <App />
    </Taverne>
  );
};

// -----------------------------------------------------------------------------

const Home = () => {
  return (
    <$Home>
      <Markdown markdown={pitchIntroMd} />
      <$Sample>
        <Markdown markdown={sampleMd} />
        <Demo />
      </$Sample>
      <Markdown markdown={pitchDetailsMd} />
    </$Home>
  );
};

export default Home;
