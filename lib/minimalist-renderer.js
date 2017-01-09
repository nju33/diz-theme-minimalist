import fs from 'fs';
import path from 'path';
import stringFormat from 'string-template';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import Theme from './Minimalist.jsx';

export default class MinimalistRenderer {
  static Theme = Theme;

  constructor(props, propsStr, config) {
    this.props = props;
    this.propsStr = propsStr;
    this.config = config;
    this.wrapper = fs.readFileSync(
      path.join(__dirname, '../src/markups/index.html'), 'utf-8'
    );
  }

  wrap(contents) {
    const html = stringFormat(this.wrapper, {
      ...this.props,
      contents,
      props: this.propsStr,
      config: this.config
    });
    return html;
  }

  render() {
    const contents =
      renderToString(<Theme {...this.props} config={this.config}/>);
    return this.wrap(contents);
  }
}
