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
  const [close, setClose] = React.useState(true);
  const [firstInit, setFirstInit] = React.useState(false);
  const windowWidthRef = React.useRef(0);

  const handlerClose = (): void => {
    setClose(!close);
  };

  const checkWindowWidth = React.useCallback((): void => {
    windowWidthRef.current = Number(window.innerWidth);
    if (windowWidthRef.current <= 768) {
      setClose(false);
    }
  }, []);

  React.useEffect(() => {
    if (!firstInit) {
      checkWindowWidth();
      window.addEventListener('resize', checkWindowWidth);
      setFirstInit(!firstInit);
    }
  }, []);

  return (
    <aside className={style.aside}>
      <div className={style.logo}>
        <Link to="/" title="home">
          <img src={iconSvg} alt="logo" loading="lazy" />
          {close && <h2 className={style.title_logo}>cloudcash</h2>}
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
                  {close && el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={style.btn} onClick={handlerClose}>
        <Icon type={close ? 'close' : 'open'} />
        {close && <span>Less information</span>}
      </button>
    </aside>
  );
};

export default Aside;
