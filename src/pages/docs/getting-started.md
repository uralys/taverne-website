# Getting started

## [Install](#install)

```sh
> npm i --save taverne
```

## [Instanciate your Taverne](#instanciate-your-taverne)

Once your `barrels` are ready, you can instanciate your `taverne` and `dispatch`:

```js
import createLaTaverne from 'taverne';
import books from './barrels/books';
import potions from './barrels/potions';
import handcrafts from './barrels/handcrafts';

const barrels = {
  books,
  potions,
  handcrafts
};

const {dispatch, taverne} = createLaTaverne(barrels);
```

## [Create a barrel](#create-a-barrel)

A "Barrel" is an `initialState` and a list of `reactions`.

```js
import {ADD_BOOK} from '../actions/shelves';

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
```

## [Reactions](#reactions)

- A `reaction` will be triggered when an action is dispatched with `action.type` === `on`.

```js
const doSomethingInThisBarrel = {
  on: 'ACTION_TYPE',
  perform: (payload, dispatch, getState) => {
    /*
      Optional sync or async function.
      It will be called before `reduce`

      When it is done, reduce will receive the returned result in
      the `payload` parameter.

      You can `dispatch` next steps from here as well
    */
  },
  reduce: (state, payload) => {
    /*
      Just update the state with your payload.
      Here, `state` is the draftState used by `Immer.produce`
      You taverne will then record your next immutable state nested in this barrel.
    */
    state.foo = 'bar';
  },
  after: (payload, dispatch, getState) => {
    /*
      Optional sync or async function.
      It will be called after `reduce`.

      payload here is the same one received by reduce

      You can `dispatch` next steps from here as well
    */
  }
};
```

- `reduce` is called using `Immer`, so mutate the `state` exactly as you would with the `draftState` parameter in [produce](https://immerjs.github.io/immer/docs/produce).

- If you have some business to do **before** reducing, for example calling an API, use the `perform` function, either `sync` or `async`.

Then `reduce` will be called with the result once it's done.

- If you have some business to do **after** reducing, use the `after` function, either `sync` or `async`.

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
  <Taverne dispatch={dispatch} taverne={taverne}>
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
const customMiddlewareCreator = taverne => {
  const currentState = taverne.getState();

  return {
    onCreate: (dispatch, taverne) => {},
    onDispatch: (action, dispatch, getState) => {}
  };
};
```

Then instanciate `La Taverne` with your list of middlewares as 2nd parameter:

```js
const {dispatch, taverne} = createLaTaverne(barrels, [customMiddlewareCreator]);
```

example: plugging the [redux devtools extension](https://github.com/reduxjs/redux-devtools) with this [middleware](https://github.com/uralys/taverne/blob/master/src/middlewares/devtools.js)

## [Redux devtools](#redux-devtools)

```js
import createLaTaverne from 'taverne';
import {createDevtools} from 'taverne/middlewares';
import books from './barrels/books';

const devtools = createDevtools();
const {dispatch, taverne} = createLaTaverne({books}, [devtools]);
```

For performance, you can use options to hide huge part of the state you don't need to debug

```js
const devtools = createDevtools({
    applyStateFiltering: state => ({
      ...state,
      hugeParent: {
        ...state.hugeParent,
        hugeChild: '<HUGE>'
      }
    })
```
