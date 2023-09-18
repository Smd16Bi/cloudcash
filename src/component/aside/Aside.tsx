import React from 'react';
import style from './aside.module.css';
import { Link, useLocation } from 'react-router-dom';
import iconSvg from '../../assets/icon-logo.svg';
import Icon from '../../ui/Icon';

const navigation = [
  {
    path: '/',
    name: 'Overview',
  },
  {
    path: 'transactions',
    name: 'Transactions',
  },
  {
    path: 'cards',
    name: 'Cards',
  },
  {
    path: 'invoices',
    name: 'Invoices',
  },
  {
    path: 'goals',
    name: 'Goals',
  },
  {
    path: 'settings',
    name: 'Settings',
  },
];

const Aside: React.FC = () => {
  const location = useLocation();

  return (
    <aside className={style.aside}>
      <div className={style.logo}>
        <Link to="/" title="home">
          <img src={iconSvg} alt="logo" loading="lazy" />
          <h2 className={style.title_logo}>cloudcash</h2>
        </Link>
      </div>
      <nav className={style.nav}>
        <ul className={style.list}>
          {navigation.map((el) => {
            return (
              <li key={el.name} className={style.item}>
                <Link
                  to={el.path}
                  className={location.pathname === el.path ? `${style.link} ${style.active}` : `${style.link} `}>
                  <Icon type={el.name} />
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
