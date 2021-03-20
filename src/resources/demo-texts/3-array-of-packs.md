## an array of Packs

```js
const {color, packNum, rgbNum} = props;
const {pour} = useTaverne();
const clickCount = pour(`multiPacks.${packNum}.${rgbNum}.${color}`);
```
