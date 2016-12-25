import React, {Component, PropTypes} from 'react';

export default class Post extends Component {
  render() {
    const {title, contents, next, prev} = this.props;

    const prevElem = (() => {
      if (prev) {
        return (
          <a className="pager__link" href={prev.absURL}>{prev.title}</a>
        );
      }
      return <a className="pager__link"></a>;
    })();

    const nextElem = (() => {
      if (next) {
        return (
          <a className="pager__link" href={next.absURL}>{next.title}</a>
        );
      }
      return <a className="pager__link"></a>;
    })();

    return (
      <div className="post__box">
        <header className="post__header">
          <h2 className="post__title">{title}</h2>
        </header>
        <div className="post__contents"
          dangerouslySetInnerHTML={{__html: contents}}></div>
        <footer className="post__footer">
          <div className="pager__box">
            {prevElem}
            {nextElem}
          </div>
        </footer>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired
};
