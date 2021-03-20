`La Taverne` is an elementary [Flux](https://facebook.github.io/flux/docs/in-depth-overview) implementation to manage your state.

The original idea is to keep `Redux` original power and simplicity, removing the headaches of the mandatory addons you surely had to deal with too like [Redux-thunks](https://github.com/reduxjs/redux-thunk) or [Reselect](https://github.com/reduxjs/reselect).

Let's keep the 🚀

- 1 external, predictable and centralized state.
- actions + reducers
- middlewares
- easily debuggable with [devtools](https://github.com/reduxjs/redux-devtools)

Now let's add the [Immer](https://immerjs.github.io/immer/produce) magic to assure immutability in your reducing.

### React

`La Taverne` provides an optional, yet easy [integration with React](https://github.com/uralys/taverne/blob/master/docs/react.md#%EF%B8%8F-setup-the-taverne-provider) using custom **hooks**.
