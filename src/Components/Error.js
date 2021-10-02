import React from 'react';
import {Link} from 'react-router-dom';

export const Error = () => {
  // 404 error
  return (
    <div>
      <p>Uh oh, looks like the page you were looking for doesn't exist. Maybe try looking for it from the <Link to="/">Home page</Link>?</p>
    </div>
  );
}
