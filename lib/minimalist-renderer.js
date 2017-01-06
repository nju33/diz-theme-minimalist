import fs from 'fs';
import path from 'path';
import stringFormat from 'string-template';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import Theme from './Minimalist.jsx';

export default class MinimalistRenderer {
  constructor(props, config) {
    this.props = props;
    this.config = config;
    this.wrapper = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
    console.log(this);
  }

  wrap(contents) {
    return stringFormat(this.wrapper, {
      ...this.props,
      contents,
      config: this.config
    });
  }

  render() {
    const contents =
      renderToString(<Theme {...this.props} config={this.config}/>);
    return this.wrap(contents);
  }
}
