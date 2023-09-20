import React from 'react';
import Loyaut from './loyaut/Loyaut';
import { Routes, Route } from 'react-router-dom';
import { Cards, Goals, Invoices, NotFound, Overview, Settings, Transactions } from './pages';

const App: React.FC = () => {
  return (
    <Loyaut>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Loyaut>
  );
};

export default App;
