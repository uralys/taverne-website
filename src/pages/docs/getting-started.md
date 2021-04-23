# Getting started

## [Install](#install)

```sh
> npm i --save taverne
```

## [Instanciate your store](#instanciate-your-store)

Once your reducers are ready, you can instanciate your `store` and `dispatch`:

```js
import createLaTaverne from 'taverne';
import books from './features/books/reducer';
import potions from './features/potions/reducer';
import handcrafts from './features/handcrafts/reducer';

const {dispatch, store} = createLaTaverne({
  books,
  potions,
  handcrafts
});
```

## [Create a reducer](#create-a-reducer)

A "Reducer" is an `initialState` and a list of `reactions`.

```js
const ADD_BOOK = 'ADD_BOOK';

const addBook = {
  on: ADD_BOOK,
  reduce: (state, payload) => {
    const {book} = payload;
    state.entities.push(book);
  }
};

export default {
  initialState: {entities: []},
  reactions: [addBook]
};

export {ADD_BOOK};
```

## [Reactions](#reactions)

- A `reaction` will be triggered when an action is dispatched with `action.type` === `on`.

```js
const doSomethingInThisStore = {
  on: 'ACTION_TYPE',
  reduce: (state, payload) => {
    /*
      Just update the state with your payload.
      Here, `state` is the draftState used by `Immer.produce`
      You store will then record your next immutable state.
    */
    state.foo = 'bar';
  },
  perform: (parameters, dispatch, getState) => {
    /*
      Optional sync or async function.
      It will be called before `reduce`

      When it is done, reduce will receive the result in
      the `payload` parameter.

      You can `dispatch` next steps from here as well
    */
  }
};
```

- `reduce` is called using `Immer`, so mutate the `state` exactly as you would with the `draftState` parameter in [produce](https://immerjs.github.io/immer/docs/produce).

- If you have some business to do before reducing, for example calling an API, use the `perform` function, either `sync` or `async`.

  Then `reduce` will be called with the result once it's done.

## [React integration](#react-integration)

`La Taverne` has a context Provider `<Taverne>` which provides 2 utilities:

- the `pour` hook to access your global state anywhere
- the `dispatch` function

```js
/* src/app.js */
import React from 'react';
import {render} from 'react-dom';
import {Taverne} from 'taverne/hooks';

render(
  <Taverne dispatch={dispatch} store={store}>
    <App id={id} />
  </Taverne>,
  container
);
```

```js
/* src/feature/books/container.js */
import {useTaverne} from 'taverne/hooks';

const BooksContainer = props => {
  const {dispatch, pour} = useTaverne();
  const books = pour('books');

  return <BooksComponent books={books} />;
};
```

See the complete React integration [steps here](https://github.com/uralys/taverne/blob/master/docs/react.md).

You can "pour" specific parts of the state, to allow [accurate local rendering](https://github.com/uralys/taverne/blob/master/docs/react.md#-advanced-usage) from your global app state.

## [Middlewares](#middlewares)

You can create more generic middlewares to operate any actions:

```js
const customMiddleware = {
  onCreate: (dispatch, store) => {},
  onDispatch: (action, dispatch, getState) => {}
};
```

Then instanciate `La Taverne` with your list of middlewares as 2nd parameter:

```js
const {dispatch, store} = createLaTaverne(reducers, [customMiddleware]);
```

example: plugging the [redux devtools extension](https://github.com/reduxjs/redux-devtools) with this [middleware](https://github.com/uralys/taverne/blob/master/src/middlewares/devtools.js)

## [Redux devtools](#redux-devtools)

```js
import createLaTaverne from 'taverne';
import {devtools} from 'taverne/middlewares';
import books from './features/books/reducer';

const {dispatch, store} = createLaTaverne({books}, [devtools]);
```
