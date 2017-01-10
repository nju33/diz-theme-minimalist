import React, {Component, PropTypes} from 'react';

export default class List extends Component {
  render() {
    const {post} = this.props;
    const {directory} = post;
    const {items, page} = post.data;

    const prev = directory.posts[page - 2];
    const next = directory.posts[page];

    const postElements = items.map((post, idx) => {
      return (
        <article key={idx} className="list__item">
          <header className="list__title">
            <h2>
              <a href={post.absURL}>{post.data.title}</a>
            </h2>
          </header>
          <div className="list__contents"
            dangerouslySetInnerHTML={{__html: post.contentsBeginning}}></div>
          <a className="list__more" href={post.absURL}>Read more</a>
        </article>
      );
    });
    const prevElem = (() => {
      if (prev) {
        return (
          <a className="pager__link" href={prev.absURL}>Prev</a>
        );
      }
      return <a className="pager__link"></a>;
    })();
    const nextElem = (() => {
      if (next) {
        return (
          <a className="pager__link" href={next.absURL}>Next</a>
        );
      }
      return <a className="pager__link"></a>;
    })();

    return (
      <div className="list__box">
        <div className="list__items">
          {postElements}
        </div>
        <div className="pager__box">
          {prevElem}
          {nextElem}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired
};

List.defaultProps = {
  items: []
};
