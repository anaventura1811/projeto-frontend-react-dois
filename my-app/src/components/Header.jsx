import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header>
      <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {

// }

export default Header;