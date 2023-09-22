import React from 'react';
import style from './progressBar.module.css';

type ProgressProp = {
  maxValue: number;
  outCome: number;
  currencySymbol: string;
};

const ProgressBar: React.FC<ProgressProp> = ({ maxValue, outCome, currencySymbol }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.bar}>
        <progress id="progress-bar" max={maxValue} value={outCome}></progress>
      </div>
      <div className={style.info}>
        <p className={style.text}>Weekly payment limit</p>
        <p className={style.money}>
          <span className={style.current_value}>
            {outCome}
            {currencySymbol}
          </span>
          <span className={style.line}> / </span>
          <span className={style.max_value}>
            {maxValue}
            {currencySymbol}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
