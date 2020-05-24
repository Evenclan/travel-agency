import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

class OrderSummary extends React.Component {
  static propTypes = {

  }

  render() {

    return (
      <h2 className={styles.component}>Total: <strong>$12.345</strong></h2>
    );
  }
}

export default OrderSummary;

