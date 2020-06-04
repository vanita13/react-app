import React from 'react';

import Menu from './components/MenuComponent';
import {Navbar,NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>con fusion</NavbarBrand>

        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
