import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

import { Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.any,
  }

  render() {
    const { tripCost } = this.props;
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={OrderSummary}/>
        </Col>
      </Row>
    );
  }
}



export default OrderForm;

