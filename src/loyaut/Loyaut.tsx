import React from 'react';
import { Aside, Header } from '../component';
type Props = {
  children?: React.ReactNode;
};
const Loyaut: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Loyaut;
