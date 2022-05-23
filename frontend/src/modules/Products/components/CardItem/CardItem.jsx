import { memo } from 'react';
import { CardStyled, ImageContainerStyled } from './style';
import PropTypes from 'prop-types';

export const CardItem = ({ image, title, price, onClick }) => {
  return(
    <CardStyled onClick={onClick}>
      <ImageContainerStyled>
        <img src={image} alt={title} />
      </ImageContainerStyled>
      <div>
        <h6 className="mt-1.5 font-1.5">$ {price}</h6>
        <p className="mt-1">{title}</p>
      </div>
    </CardStyled>
  )
}

CardItem.defaultProps = {
  onClick: () => {}
}

CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default memo(CardItem);
