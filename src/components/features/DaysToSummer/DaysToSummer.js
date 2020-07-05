import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';
// import { formatTime } from '../../../utils/formatTime';

class DaysToSummer extends React.Component {

  render() {

    let today = new Date();

    let year = today.getUTCFullYear();
    let month = today.getUTCMonth();
    let day = today.getUTCDate();

    console.log(year, month, day);

    let currentDay = function (date) {
      let current = new Date(date.getTime());
      let previous = new Date(date.getUTCFullYear(), 0, 1);

      return Math.ceil((current - previous + 1) / 86400000);
    };

    let leapYear =  today.getUTCFullYear() % 4 === 0 ? 366 : 365;

    console.log(leapYear);
    let current = currentDay(new Date(year, month, day));
    let june = (currentDay(new Date(year, 5, 21)));
    let sept = (currentDay(new Date(year, 8, 24)));


    let summerCountdown;

    if (june > current) {
      summerCountdown = june - current;
    } else if (sept <= current) {
      summerCountdown = (leapYear === 366) ? (leapYear - current + june - 1) : (leapYear - current + june);
    } else summerCountdown = '';

    let title;

    if (summerCountdown > 1) {
      title = ' days to summer';
    }
    else if (summerCountdown === 1) {
      title = ' day to summer';
    }
    else title = '';

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{summerCountdown}{title}</h3>
      </div>

    );
  }
}
DaysToSummer.propTypes = {
  titleText: PropTypes.string,

};

export default DaysToSummer;
