import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ currentValue, price, setOptionValue, limits }) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      required
      onChange={event => setOptionValue(event.currentTarget.value)} />
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;
