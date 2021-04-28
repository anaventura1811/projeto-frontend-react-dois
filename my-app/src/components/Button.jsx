import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text }) => {

  const onClick = () => {
    console.log('Click, estou funfando')
  }
  return <button className='btn' 
    onClick={onClick}
    style={{backgroundColor: color}}>
      {text}
    </button>
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button;