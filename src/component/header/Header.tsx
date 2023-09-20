import React from 'react';
import style from './header.module.css';
import iconAccount from '../../assets/icon-account.svg';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.title}>
        <h1>Weekly sumup</h1>
        <p>Get summary of your weekly online transactions here.</p>
      </div>
      <div className={style.account}>
        <div className={style.account_img}>
          <img src={iconAccount} alt="Account" width={35} height={35} loading="lazy" />
        </div>
        <div className={style.account_info}>
          <span className={style.account_name}>Andrew</span>
          <span className={style.account_type}>Admin account</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
