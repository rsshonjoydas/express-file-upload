/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section className="Users">
      <div className="container">
        <h5 className="text-center  text-primary mb-5">Our Users</h5>
        <div className="row">
          {users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
