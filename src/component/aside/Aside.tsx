import React from 'react';
import style from './aside.module.css';
import { Link } from 'react-router-dom';

import iconSvg from '../../assets/icon-logo.svg';

const Aside: React.FC = () => {
  return (
    <aside className={style.aside}>
      <div className={style.logo}>
        <Link to="/" title="home">
          <img src={iconSvg} alt="logo" loading="lazy" />
          <h2 className={style.title_logo}>cloudcash</h2>
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
