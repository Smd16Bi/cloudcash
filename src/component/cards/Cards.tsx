import React from 'react';
import style from './card.module.css';
import Slider from '../../ui/slider/Slider';
import ProgressBar from '../../ui/progressBar/ProgressBar';
const sl = [
  {
    name: 'John Doe 1',
    lastNumber: '0123',
    date: '01/24',
  },
  {
    name: 'John Doe 2',
    lastNumber: '0456',
    date: '02/25',
  },
  {
    name: 'John Doe 3',
    lastNumber: '0678',
    date: '03/26',
  },
  {
    name: 'John Doe 4',
    lastNumber: '0890',
    date: '04/27',
  },
];

const valueMoney = {
  currentValue: 2850.75,
  maxValue: 4000,
  outcome: 350.6,
  currencySymbol: '$',
};

const Cards = () => {
  return (
    <div className={style.cards}>
      <div className={style.card_left}>
        <Slider className={style.slider} slides={sl} />
        <ProgressBar
          maxValue={valueMoney.maxValue}
          outCome={valueMoney.outcome}
          currencySymbol={valueMoney.currencySymbol}
        />
      </div>
      <div className={style.card_right}>
        <div className={style.current}>
          <p>
            {valueMoney.currencySymbol}

            {valueMoney.currentValue}
          </p>
          <span className={style.label}>Current balance</span>
        </div>
        <div className={style.outcome}>
          <p>
            {valueMoney.currencySymbol}

            {valueMoney.outcome}
          </p>
          <span className={style.label}>Outcome</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
