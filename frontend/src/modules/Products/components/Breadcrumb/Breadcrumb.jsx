import PropTypes from 'prop-types';
import { ContainerStyled, TextStyled } from './style';

const Breadcrumb = ({ categories }) => {
 return(
   <ContainerStyled className="w-full d-flex flex-row">
     {categories && categories.map(category => {
       return(
         <TextStyled key={category}>
           {category}
           <span>></span>
         </TextStyled>
       )
     })}
   </ContainerStyled>
 )
}

Breadcrumb.defaultProps= {
  categories: []
}

Breadcrumb.propTypes = {
  categories: PropTypes.array
}

export default Breadcrumb;
