import PropTypes from 'prop-types';
import { CardContainerStyled } from '../../Pages/ListProductsPage/style';
import { CardStyled, ImageContainerStyled } from '../CardItem/style';
import { PriceSkeletonStyled, TitleSkeletonStyled } from './style';

const CardSkeleton = ({ lengthCards }) => {
  const array = new Array(lengthCards).fill(0);
  return(
    <CardContainerStyled>
      {
        array.map((item, index) => {
          return(
            <CardStyled key={index} className="animate-pulse">
              <ImageContainerStyled />
              <div>
                <PriceSkeletonStyled className="mt-1.5 font-1.5" />
                <TitleSkeletonStyled className="mt-1" />
              </div>
            </CardStyled>
          )
        })
      }
    </CardContainerStyled>
  )
}

CardSkeleton.propTypes = {
  lengthCards: PropTypes.number.isRequired
}

export default CardSkeleton;
