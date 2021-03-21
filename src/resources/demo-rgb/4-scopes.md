# Scopes

Now let's instanciate twice this `<App/>`, side by side.

```html
<>
  <DemoApp />
  <DemoApp />
</>
```

`<Taverne/>` provides with properly scoped stores:

```js
const DemoApp = props => {
  const {dispatch, store} = createLaTaverne({
    singlePack,
    singleRGB,
    singleSquare,
    multiPacks
  });

  return (
    <Taverne dispatch={dispatch} store={store}>
      <App />
    </Taverne>
  );
};
```
