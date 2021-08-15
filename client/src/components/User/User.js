/* eslint-disable jsx-a11y/alt-text */
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const User = ({ user }) => (
  <div className="col-md-4 col-sm-6 text-center">
    {user.image ? (
      <img style={{ height: '200px' }} src={`data:image/png;base64,${user.image.img}`} />
    ) : (
      <img
        style={{ height: '200px' }}
        className="img-fluid mb-3"
        src={`http://localhost:5000/${user.img}`}
        alt=""
      />
    )}
    <h4>{user.name}</h4>
    {/* <p>
      {' '}
      <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789
    </p> */}
  </div>
);
export default User;
