## one Pack

composed of many `<RGB/>`

```js
const {color, num: rgbNum} = props;
const {pour} = useTaverne();
const clickCount = pour(`singlePack.${rgbNum}.${color}`);
```
