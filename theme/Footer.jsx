import React, {Component, PropTypes} from 'react';

export default class Footer extends Component {
  render() {
    const {title} = this.props.site;

    return (
      <div className="footer__box">
        powerd by <a href="https://github.com/nju33/diz">diz</a> © 2016 {title}
      </div>
    );
  }
}

// List.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.instanceOf(Post))
// };
