import React, { Component } from "react";
import { connect } from "react-redux";

import * as userActions from "../actions/userActions";

class Publications extends Component {
  componentDidMount() {
    if (!this.props.users.lenght) {
      this.props.getAll();
    }
  }
  render() {
    return (
      <div>
        <h1>'s Publications`</h1>
        <div>{this.props.match.params.key}</div>
      </div>
    );
  }
}
const mapStateToProps = (reducers) => {
  return reducers.userReducers;
};

export default connect(mapStateToProps, userActions)(Publications);
