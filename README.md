## ES2015+ support

Spectator supports ES2015+ by transpiling files with [Babel](https://babeljs.io/). Any JavaScript feature included in the [latest preset](https://babeljs.io/docs/plugins/preset-latest/) can be used in a toy problem. The tradeoff for this support is that error messages can sometimes be a bit more obscure and/or line numbers in the stack trace don't map precisely to their original line numbers.

If this is not an acceptable tradeoff, you can write only ES5 code create a `spectator.json` file in the root of the problem directory that looks like this:

```js
{
  "babel": false
}
```
