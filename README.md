# Minimalist

A [Diz](https://github.com/nju33/diz) theme. [[demo](https://nju33.github.io/diz-theme-minimalist/)]

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) ![Dependencies Status](https://david-dm.org/nju33/diz-theme-minimalist.svg)

## Install

```bash
yarn add -D diz-theme-minimalist
npm i -D diz-theme-minimalist
```

## Customize

Clone this.

```bash
git clone git@github.com:nju33/diz-theme-minimalist.git
# or git clone https://github.com/nju33/diz-theme-minimalist.git
```

To prepare the environment.

```bash
cd <cloned directory path>
<npm or yarn> install
```

Edit `theme/**/*.jsx` files.

Then read in config.js.

```js
const CustomTheme = require('./path/to/custom-theme');

module.exports = {
  title: '...',
  url: '...',
  theme: {
    Renderer: CustomTheme,
    config: {base: '...'}
  }
}
```

:tada::clap::clap::clap::clap::clap:

## Options

```js
{
  theme: {
    Renderer: Minimalist
    config: {
      base: null // default
      // Specify the path to the scripts directory
      // (e.g.)
      // When the blog's URL is like this
      // http://example.com/foo/
      // It is good to specify `/foo`
    }
  }
}
```

## License

The MIT License (MIT)

Copyright (c) 2016 nju33 <nju33.ki@gmail.com>
