import { memo } from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './style';

const Input = ({ placeholder, onChange, value, disabled, block, ...rest}) => {
  return(
    <InputStyled
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      block={block}
      {...rest}
    />
  )
}

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  block: false
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  block: PropTypes.bool
}

export default memo(Input);
