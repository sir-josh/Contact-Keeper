import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title, icon})=>{
  return(
      <div className="navbar bg-primary">
        <h3><i className={icon} /> &nbsp; {title}</h3>
      </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}
export default Navbar;