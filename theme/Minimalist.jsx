import React, {Component} from 'react';
// import Theme from 'diz/theme';
// import Breadcrumb from './Breadcrumb.jsx';
// import Sidebar from './Sidebar.jsx';
// import List from './List.jsx';
// import Post from './Post.jsx';
// import Footer from './Footer.jsx';

export default class Minimalist extends Component{
  // static buildJsonLDOfBreadcrumb(breadcrumb) {
  //   const items = breadcrumb
  //     .filter(item => (
  //       !item.fake && item.name
  //     ))
  //     .map((item, idx) => (
  //       {
  //         '@type': 'ListItem',
  //         position: idx+1,
  //         item: {
  //           '@id': item.id,
  //           name: item.name
  //         }
  //       }
  //     ));
  //   const json = JSON.stringify({
  //     '@context': 'http://schema.org',
  //     '@type': 'BreadcrumbList',
  //     itemElement: items
  //   });
  //   return `<script type="application/ld+json">${json}</script>`
  // }

  // renderContentOfList() {
  //   return List;
  // }
  //
  // renderContentOfPost() {
  //   return Post;
  // }

  render() {
    const {props} = this;
    const {type, breadcrumb} = props;
    // const Content = this.renderContents(type);

    return (
      <div className="container">
        asdf
        {/* <Sidebar {...props}/>
        <main id="main" className="main">
          <div className="contents">
            <Breadcrumb {...props}/>
            <Content {...props}/>
          </div>
          <Footer {...props}/>
        </main> */}
      </div>
    );
  }
}

// Minimalist.init();
