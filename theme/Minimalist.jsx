import React, {Component} from 'react';
import Breadcrumb from './Breadcrumb.jsx';
import Sidebar from './Sidebar.jsx';
import List from './List.jsx';
import Post from './Post.jsx';
import Footer from './Footer.jsx';

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

  getContent(post) {
    switch (post.type) {
      case 'LIST': {
        return List;
      }
      case 'POST': {
        return Post;
      }
      default: {
        return Post;
      }
    }
  }

  render() {
    const {type, post} = this.props;
    const Content = this.getContent(post);

    return (
      <div className="container">
        <Sidebar post={post}/>
        <main id="main" className="main">
          <div className="contents">
            {/* <Breadcrumb {...props}/> */}
            <Content post={post}/>
          </div>
          <Footer post={post}/>
        </main>
      </div>
    );
  }
}

// Minimalist.init();
