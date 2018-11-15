
# timeout-wrap

[![NPM version](https://img.shields.io/npm/v/timeout-wrap.svg?style=flat)](https://npmjs.com/package/timeout-wrap) [![NPM downloads](https://img.shields.io/npm/dm/timeout-wrap.svg?style=flat)](https://npmjs.com/package/timeout-wrap) [![CircleCI](https://circleci.com/gh/ULIVZ/timeout-wrap/tree/master.svg?style=shield)](https://circleci.com/gh/ULIVZ/timeout-wrap/tree/master)  [![codecov](https://codecov.io/gh/ULIVZ/timeout-wrap/branch/master/graph/badge.svg)](https://codecov.io/gh/ULIVZ/timeout-wrap)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/ULIVZ/donate)

## Install

```bash
yarn add timeout-wrap
```

## Usage

```js
const wrap = require('timeout-wrap')

const myPromise = new Promise(resolve => {
  timer1 = setTimeout(() => resolve('output'), 300)
})

const promise = wrap(myPromise, 200, 'default')

promise.then(res => console.log(res)) // 'default'
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**timeout-wrap** © [ULIVZ](https://github.com/ULIVZ), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by ULIVZ with help from contributors ([list](https://github.com/ULIVZ/timeout-wrap/contributors)).

> [github.com/ULIVZ](https://github.com/ULIVZ) · GitHub [@ULIVZ](https://github.com/ULIVZ) · Twitter [@_ulivz](https://twitter.com/_ulivz)
