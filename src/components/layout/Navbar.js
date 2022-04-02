import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='violet ui inverted menu'>
      <h1 className='header item'>
        <i className={props.icon}>{props.title}</i>
      </h1>
      <Link to='/' className='right item'>
        Home
      </Link>
      <Link to='/about' className='item'>
        About Us
      </Link>
      <Link to='/company' className='item'>
        Company
      </Link>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github DefaultProps",
  icon: "fab fa-github-alt",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

