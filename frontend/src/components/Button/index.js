import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

function Button(props) {
  const {
    label,
    type,
    color,
    block,
    size,
    flat,
    disabled,
    onClick,
    children,
  } = props;

  const btnClass = ClassNames('btn', {
    'btn-default': color === 'default',
    'btn-primary': color === 'primary',
    'btn-success': color === 'success',
    'btn-info': color === 'info',
    'btn-danger': color === 'danger',
    'btn-warning': color === 'warning',
    'bg-olive': color === 'olive',
    'bg-purple': color === 'purple',
    'bg-navy': color === 'navy',
    'bg-orange': color === 'orange',
    'bg-maroon': color === 'maroon',
    'btn-block': block,
    'btn-lg': size === 'lg',
    'btn-sm': size === 'sm',
    'btn-xs': size === 'xs',
    'btn-flat': flat,
  });

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <span>{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  color: PropTypes.string.isRequired,
  block: PropTypes.bool,
  size: PropTypes.string,
  flat: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  block: false,
  size: '',
  flat: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
