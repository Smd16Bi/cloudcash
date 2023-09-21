import React from 'react';
import style from './card.module.css';
import Slider from '../../ui/slider/Slider';

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

const Cards = () => {
  return (
    <div className={style.cards}>
      <div className={style.card_left}>
        <Slider className={style.slider} slides={sl} />
      </div>
      <div className={style.card_right}></div>
    </div>
  );
};

export default Cards;
