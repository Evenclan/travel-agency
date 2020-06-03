import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing';
import Button from '../../common/Button/Button';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import settings from '../../../data/settings';

import { Row, Col } from 'react-flexbox-grid';

const sendOrder = (options, tripCost, tripId, tripName, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  if ((options.contact == '') && (options.name == '')) {
    window.alert('Fill name');
  } else {

    const payload = {
      tripId,
      tripName,
      tripCountry,
      ...options,
      totalCost,
    };


    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        console.log(tripId, tripCountry, tripName);
      });
  }
};

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
    tripName: PropTypes.string,
    tripCountry: PropTypes.string,
    tripId: PropTypes.string,
  }

  render() {
    const { tripCost, options, setOrderOption, tripId, tripName, tripCountry } = this.props;
    return (
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} />
        </Col>
        <Button onClick={() => sendOrder(options, tripCost, tripName, tripCountry, tripId)}>Order now!</Button>
      </Row>
    );
  }
}




export default OrderForm;

