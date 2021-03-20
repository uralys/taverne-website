Each one will be connected to a part of the store, and display:

- the number of times it was clicked
- the number of times it was rendered

You see the exact same behaviour as using a local `useState()`, except this state is **not local**: it's part of an external global state handled by `La Taverne`.

To read the click count, we `pour` the value from the store:

```js
/* src/features/single-square/container.js */
import {useTaverne} from 'taverne/hooks';

const {pour} = useTaverne();
const clickCount = pour('singleSquare.clickCount');
```

To reduce a new state from an action, we use this `reaction`:

```js
/* src/features/single-square/reducer.js */
const reaction = {
  on: TOGGLE_SINGLE_SQUARE,
  reduce: (state, payload) => {
    state.clickCount++;
  }
};
```

To enable `useTaverne` and `pour` hooks, we need to instanciate `La Taverne` for our `<App/>`

```js
import React from 'react';
import {render} from 'react-dom';
import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';

import singleSquare from './features/single-square/reducer';

const {dispatch, store} = createLaTaverne({singleSquare});

render(
  <Taverne dispatch={dispatch} store={store}>
    <App />
  </Taverne>,
  container
);
```

## Local rendering

Let's illustrate how local rendering with the `pour` hook is efficient on nested state properties.

We'll use 4 separated parts in our global state, connected to dedicated containers:

- `singleSquare` to count the clicks for the `<SingleSquare/>`
- `singleRGB` to count the clicks for the `<SingleRGB/>`
- `singlePack` to count the clicks for the `<SinglePack/>`
- `multiPacks` to count the clicks for the `<MultiPacks/>`

Now let's nest some `Squares`

## one RGB

composed of 3 `Squares`, colored `R`,`G`,`B`

```js
const {color} = props;
const {pour} = useTaverne();
const clickCount = pour(`singleRGB.${color}`);
```
