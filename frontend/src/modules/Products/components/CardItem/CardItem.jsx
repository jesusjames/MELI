import { memo } from 'react';
import { CardStyled, ImageContainerStyled } from './style';
import PropTypes from 'prop-types';

export const CardItem = ({ image, title, price }) => {
  return(
    <CardStyled>
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

CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default memo(CardItem);
