import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./css/icons.css";

function Table(props) {
  const addArrow = () =>
    props.users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={`/publications/${key}`}>
            <div className="eye-solid2 icon"></div>
          </Link>
        </td>
      </tr>
    ));
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{addArrow()}</tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.userReducers;
};

export default connect(mapStateToProps)(Table);
