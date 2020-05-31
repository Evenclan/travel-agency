import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (

  <div className={styles.component}>

    {required ? '' : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
      </div>
    )}
    {values.map(value => (
      <div className={styles.icon + (currentValue === value.id ? ' ' + styles.iconActive : '')}
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon}/>
        {value.name} {formatPrice(value.price)}

      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.string,
  required: PropTypes.string,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

console.log('to jest typeof', typeof values, typeof required);

export default OrderOptionIcons;

