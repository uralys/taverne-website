### La Taverne

Let's keep what is great in `Redux`:

- 1 external, predictable and centralized state.
- actions + reducers
- middlewares
- easily debuggable with [devtools](https://github.com/reduxjs/redux-devtools)

Now let's add the [Immer](https://immerjs.github.io/immer/produce) magic to assure immutability in your reducing.

### focus on React

`La Taverne` provides an optional, yet easy [integration with React](https://github.com/uralys/taverne/blob/master/docs/react.md#%EF%B8%8F-setup-the-taverne-provider) using custom **hooks**.

This was actually the original idea: working on the `React` performance on local rendering without all the manual memoization.

```js
const {dispatch, pour} = useTaverne();
const clickCount = pour('counter.clickCount');

const increment = () => {
  dispatch({
    type: 'increment'
  });
};
```
