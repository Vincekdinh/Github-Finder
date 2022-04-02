import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../App.css";

//to render each item of an array from Users comp
class UserItem extends Component {
  render() {
    const { login, avatar_url } = this.props.user;
    return (
      <div className='card text-center'>
        <h3 className='card header' style={{ border: " 3px solid violet" }}>
          {login}
        </h3>
        <div className='card body'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: "100px", margin: "0 auto" }}
          />
          <div>
            <Link
              to={`/user/${login}`}
              style={{ width: "100px", margin: "0 auto" }}
              className='orange ui inverted button'
            >
              More...
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propsTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

