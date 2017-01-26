import fs from 'fs';
import path from 'path';
import pupa from 'pupa';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import Theme from 'diz-theme';
import omitBy from 'lodash.omitby';
import isNull from 'lodash.isnull';
import MinimalistTheme from './Minimalist.jsx';

export default class MinimalistRenderer extends Theme {
  static nodeModulesPath = path.join(__dirname, '../node_modules/');
  static path = __filename;
  static Theme = MinimalistTheme;
  static Render(props) {
    return render(
      <Theme {...props}/>,
      document.getElementById('blog')
    );
  }

  constructor(props, propsStr) {
    super();
    this.props = props;

    Object.assign({
      inlineCSS: true
    }, this.props.config);

    if (!MinimalistRenderer.isBrowser()) {
      this.propsStr = propsStr;

      if (this.props.config.inlineCSS) {
        this.css = fs.readFileSync(
          path.join(__dirname, '../index.css'), 'utf-8'
        );
      }

      this.wrapper = fs.readFileSync(
        path.join(__dirname, '../src/markups/index.html'), 'utf-8'
      );
    }
  }

  buildBreadcrumb(post) {
    const itemListElement = [];
    itemListElement.push({
      '@type': 'ListItem',
      position: 1,
      item: omitBy({
        '@id': post.root.config.url || null,
        name: 'home',
        image: post.data.image || null
      }, isNull)
    });

    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      item: omitBy({
        '@id': post.directory.name || null,
        name: post.directory.name || null
      }, isNull)
    });

    if (post.data.title || post.data.page > 1) {
      itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        item: omitBy({
          '@id': post.url || null,
          name: post.data.title || post.data.page,
          image: post.data.iamge || null
        }, isNull)
      });
    }

    return {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement
    };
  }

  wrap(contents) {
    const html = pupa(this.wrapper, {
      ...this.props,
      contents,
      breadcrumb: JSON.stringify(this.buildBreadcrumb(this.props.post)),
      props: this.propsStr,
      css: this.css
    });
    return html;
  }

  render() {
    if (MinimalistRenderer.isBrowser()) {
      render(
        <MinimalistTheme {...this.props}/>,
        document.getElementById('blog')
      );
    } else {
      const contents =
        renderToString(<MinimalistTheme {...this.props}/>);
      return this.wrap(contents);
    }
  }
}

if (MinimalistRenderer.isBrowser()) {
  window.__DIZ__ = {};
  window.__DIZ__.render = props => {
    const renderer = new MinimalistRenderer(props);
    renderer.render();
  };
}
