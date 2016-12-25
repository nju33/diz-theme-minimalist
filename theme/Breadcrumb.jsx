import React, {Component, PropTypes} from 'react';

export default class Breadcrumb extends Component {
  render() {
    const {breadcrumb} = this.props;

    return (
      <div className="breadcrumb__box">
        <ul className="breadcrumb__list">
          {breadcrumb.reduce((result, item, idx) => {
            if (item.name === '') {
              return result;
            }
            if (item.fake) {
              result.push(
                <li key={idx} className="breadcrumb__item">
                  <a className="breadcrumb__link">{item.name}</a>
                </li>
              );
            } else {
              result.push(
                <li key={idx} className="breadcrumb__item">
                  <a href={item.id} className="breadcrumb__link">{item.name}</a>
                </li>
              );
            }
            return result;
          }, [])}
        </ul>
      </div>
    )
  }
}

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.array
};
