import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';
// import { formatTime } from '../../../utils/formatTime';

class DaysToSummer extends React.Component {

  // summerCountDown() {

  // }



  render() {

    let today = new Date();

    let year = today.getUTCFullYear();
    let month = 1 + today.getUTCMonth();
    let day = today.getUTCDay();

    let currentDay = function(date) {
      let current = new Date(date.getTime());
      let previous = new Date(date.getUTCFullYear(), 0, 1);

      return Math.ceil((current - previous + 1) / 86400000);
    };

    let daysToJuni = function() {
      let LeapYear = today.getUTCFullYear() % 4 === 0 ? 366 : 365;
      let current = currentDay(new Date(year, month, day));
      return LeapYear - current + 117;

    };

    let dayAmount = daysToJuni();
    let title = (dayAmount !== 1) ? title = 'days to summer' : title = 'day to summer';

    console.log(dayAmount);

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{(dayAmount < 171 && dayAmount > 265) ? dayAmount + title : ''}</h3>
      </div>

    );
  }
}
DaysToSummer.propTypes = {
  titleText: PropTypes.string,

};

export default DaysToSummer;
