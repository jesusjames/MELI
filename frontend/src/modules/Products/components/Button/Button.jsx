import { ButtonStyled } from './style';
import PropTypes from 'prop-types';

const Button = ({
  children, icon, disabled, block, color, ...rest
}) => {
  return(
    <ButtonStyled disabled={disabled} block={block} color={color} {...rest}>
      {icon && <img src={icon} alt="button icon"/>}{children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  disabled: false,
  block: false,
  color: 'secondary'
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  color: PropTypes.oneOf(['primary', 'secondary']),
  block: PropTypes.bool
}

export default Button;
