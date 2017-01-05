import React from 'react';
import Theme from 'diz/theme';
import Breadcrumb from './Breadcrumb.jsx';
import Sidebar from './Sidebar.jsx';
import List from './List.jsx';
import Post from './Post.jsx';
import Footer from './Footer.jsx';

export default class Minimalist extends Theme {
  static get wrapper() {
  return `
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="/styles/index.css">
<title>Document</title>
</head>
<body>
<div id="blog" class="blog">{markup}</div>

<script src="/scripts/bundle.js"></script>
<script>
  window.${this.PROP_NAME}.render({props})
</script>
{breadcrumbJsonLD}
</body>
</html>
  `.trim();
  }

  static renderToString(props) {
    props = this.toSafeJson(props);
    const markup = this.render(props);
    const breadcrumbJsonLD = this.buildJsonLDOfBreadcrumb(
      JSON.parse(props).breadcrumb
    );

    return this.buildHTML({markup, props, breadcrumbJsonLD});
  }

  static buildJsonLDOfBreadcrumb(breadcrumb) {
    const items = breadcrumb
      .filter(item => (
        !item.fake && item.name
      ))
      .map((item, idx) => (
        {
          '@type': 'ListItem',
          position: idx+1,
          item: {
            '@id': item.id,
            name: item.name
          }
        }
      ));
    const json = JSON.stringify({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemElement: items
    });
    return `<script type="application/ld+json">${json}</script>`
  }

  renderContentOfList() {
    return List;
  }

  renderContentOfPost() {
    return Post;
  }

  render() {
    const {props} = this;
    const {type, breadcrumb} = props;
    const Content = this.renderContents(type);

    return (
      <div className="container">
        <Sidebar {...props}/>
        <main id="main" className="main">
          <div className="contents">
            <Breadcrumb {...props}/>
            <Content {...props}/>
          </div>
          <Footer {...props}/>
        </main>
      </div>
    );
  }
}

Minimalist.init();
