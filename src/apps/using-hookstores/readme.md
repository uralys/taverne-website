# Hookstores Demo

## common components

I'll use 1 component and 2 styles for the view, the same for every features.

The idea is to pack squares of colors Red, Green, Blue in lines, and be sure only the one clicked is rerendered, even if the change is located in the global app state, inside one store.

### the Square component

- common component to all,
- counting every rendering,
- counting every click on it.

### 2 styles

- 1 RGB: a group 3 squares
- 1 line: composed of RGB

## features

In this demo, each feature:

- has its own behaviour,
- with a dedicaded `Store`,
- and a tree of containers reading this `Store` to extract the `{clickCount}` to use in the only common stuff to all features: the `<Square/>` component.

### feature `single-square`

singleSquareStore :

```js
storeState = {clickCount: 0};
```

### feature `single-rgb`

singleRGBStore:

```js
storeState = {r: 0, g: 0, b: 0};
```

### feature `single-line`

singleLineStore:

```js
storeState = {r: 0, g: 0, b: 0};
```
