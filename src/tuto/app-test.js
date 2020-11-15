import React from 'react';
import CountPage from './component-count';
import {CountProvider} from './count-context';

const App = props => {
  console.log('✨ rendering App test', props);
  const {id} = props;
  console.log(id);

  return (
    <div>
      <h2>{id}</h2>

      <CountProvider>
        <CountPage />
      </CountProvider>
    </div>
  );
};

export default App;
