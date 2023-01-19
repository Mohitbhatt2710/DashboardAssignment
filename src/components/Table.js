import React from 'react';

import '../styles/Table.css';

const Table = () => {
  return (
    <>
      <div className="table-main">
        <th>
          <th className="th1">
            <tr>
              <input style={{ border: '5px solid blue' }} type="checkbox" />
            </tr>
            <tr className="tr1">
              <input type="checkbox" />
            </tr>
            <tr>
              <input type="checkbox" />
            </tr>
            <tr>
              <input type="checkbox" />
            </tr>
            <tr>
              <input type="checkbox" />
            </tr>
            <tr>
              <input type="checkbox" />
            </tr>
            <tr>
              <input type="checkbox" />
            </tr>
            <tr>
              <input type="checkbox" />
            </tr>
          </th>
          <th className="th2">
            {/* avatar have to be created here */}
            <div className="rows">
              <tr>Avatar</tr>
              <tr>Av1</tr>
              <tr>Av2</tr>
              <tr>Av3</tr>
              <tr>Av4</tr>
              <tr>Av5</tr>
              <tr>Av6</tr>
              <tr>Av7</tr>
            </div>
          </th>

          <th className="th3">
            <tr>Email</tr>
            <tr>mohitbhatt@gmail.com</tr>
            <tr>shubham@gmail.com</tr>
            <tr>shubham@gmail.com</tr>
            <tr>shubham@gmail.com</tr>
            <tr>shubham@gmail.com</tr>
            <tr>shubham@gmail.com</tr>
            <tr>shubham@gmail.com</tr>
          </th>

          <th className="th4">
            <tr>Name</tr>
            <tr>Mohit</tr>
            <tr>Mohit</tr>
            <tr>Mohit</tr>
            <tr>Mohit</tr>
            <tr>Mohit</tr>
            <tr>Mohit</tr>
            <tr>Mohit</tr>
          </th>

          <th className="th5">
            <tr>Roles</tr>
            <tr>Roles</tr>
            <tr>Roles</tr>
            <tr>Roles</tr>
            <tr>Roles</tr>
            <tr>Roles</tr>
            <tr>Roles</tr>
            <tr>Roles</tr>
          </th>
          <th className="th6">
            <tr>Status</tr>
            {/* need to create them as buttons */}
            <tr>
              <button className="bt-invite">Invited</button>
            </tr>
            <tr>
              <button className="bt-active">Active</button>
            </tr>
            <tr>Invited</tr>
            <tr>Active</tr>
            <tr>Invited</tr>
            <tr>Active</tr>
            <tr>Invited</tr>
          </th>
        </th>

        {/* aAfter this search icon , edit icon also have to be used */}
      </div>
    </>
  );
};

export default Table;
