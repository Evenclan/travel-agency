import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

import { Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.any,
    options: PropTypes.any,
  }

  render() {
    const { tripCost, options } = this.props;
    console.log(tripCost, options);
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    );
  }
}




export default OrderForm;

