import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Input(props) {
  const { label, name, type, error, placeholder, register } = props;

  const formGroup = classNames('form-group', {
    'has-error': error,
  });

  return (
    <div className={formGroup}>
      {label && (
        <label className="control-label" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
        ref={register}
      />

      {error && <span className="help-block">{error}</span>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
    'tel',
    'search',
  ]).isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  error: '',
  placeholder: '',
};

export default Input;
