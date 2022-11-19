import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function PageView(): React.ReactElement {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
