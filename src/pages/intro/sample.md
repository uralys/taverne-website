```js
import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';

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
```

```js
import {useTaverne} from 'taverne/hooks';

const App = () => {
  const {dispatch, pour} = useTaverne();
  const clickCount = pour('counter.clickCount');

  const increment = () => {
    dispatch({
      type: 'increment'
    });
  };

  return <h1 onClick={increment}>{clickCount}</h1>;
};
```
