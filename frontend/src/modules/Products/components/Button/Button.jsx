import { ButtonStyled } from './style';
import PropTypes from 'prop-types';

const Button = ({
  children, icon, disabled, ...rest
}) => {
  return(
    <ButtonStyled disabled={disabled} {...rest}>
      {icon && <img src={icon} alt="button icon"/>}{children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ])
}

export default Button;
