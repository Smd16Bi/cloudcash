import React from 'react';
import { Aside, Header, Footer } from '../component';
type Props = {
  children?: React.ReactNode;
};
const Loyaut: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Loyaut;
