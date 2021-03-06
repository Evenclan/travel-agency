import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {

  constructor() {
    super();
    setInterval(() => {
      return this.forceUpdate();
    }, 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    const {titleText='HappyHour', promoDescription = formatTime(this.getCountdownTime())} = this.props;
    const getTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{titleText}</h3>
        <div className={styles.promoDescription}>{getTime > 82800 ? promoDescription : formatTime(this.getCountdownTime())}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  titleText: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;
