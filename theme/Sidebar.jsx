import React, {Component, PropTypes} from 'react';
import {push as Menu} from 'react-burger-menu';

export default class Sidebar extends Component {
  render() {
    const {site, posts} = this.props;
    return (
      <Menu right pageWrapId={'main'} width={300} className="sidebar__box">
        <h1 className="title">
          <a href={site.url}>{site.title}</a>
        </h1>
        <ul className="sidebar__list">
          {posts.map((post, idx) => (
            <li key={idx} className="sidebar__item">
              <a href={post.absURL} className="sidebar__link">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </Menu>
    );
  }
}

// Sidebar.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.instanceOf(Post))
// }
