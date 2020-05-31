import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing';

import { Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
  }

  render() {
    const { tripCost, options, setOrderOption} = this.props;
    // console.log('to jest typeof', typeof tripCost, typeof options);
    return (
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    );
  }
}




export default OrderForm;

