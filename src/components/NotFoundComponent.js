import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
  return (
    <div data-testid="not-found">
      <h1>404!</h1>
      <p>
        Page not Found
        <Link to="/" data-testid="home-link"> Click here</Link>
      </p>
    </div>
  );
};

export default NotFoundComponent;
