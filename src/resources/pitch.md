`La Taverne` is an elementary [Flux](https://facebook.github.io/flux/docs/in-depth-overview) implementation to manage your state.

### Influences

I needed a fresher Redux tool, without the headaches of [thunks](https://github.com/reduxjs/redux-thunk), [Reselect](https://github.com/reduxjs/reselect)

yet, `La Taverne` keeps `Redux` original power and simplicity:

- 1 external, predictable and centralized state.
- actions + reducers
- middlewares
- easily debuggable with [devtools](https://github.com/reduxjs/redux-devtools)

It also uses the [Immer](https://immerjs.github.io/immer/produce) magic to assure immutability in your reducing.

### React

`La Taverne` provides an optional, yet easy [integration with React](https://github.com/uralys/taverne/blob/master/docs/react.md#%EF%B8%8F-setup-the-taverne-provider) using custom **hooks**.
