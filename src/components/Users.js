import React, { Component } from "react";
import { connect } from "react-redux";

import * as userActions from "../actions/userActions";

import Loading from "./Loading";
import Table from "./Table";

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    if (this.props.error) {
      return <h1>{this.props.error} </h1>;
    }
    return <Table />;
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducers;
};

export default connect(mapStateToProps, userActions)(Users);
