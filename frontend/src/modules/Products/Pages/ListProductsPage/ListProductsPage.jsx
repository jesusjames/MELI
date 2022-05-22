import { ContainerStyled } from './style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../reducer/Products';
import { useSearchParams } from 'react-router-dom';

const ListProductsPage = () => {
  const { data: products, isLoading } = useSelector(state => state?.products);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const search = searchParams.get('q');

  useEffect(() => {
    dispatch(ProductsActions.productsFetchInit({ search }));
  }, []);

  if(isLoading){
    return(
      <h1>Cargando...</h1>
    )
  }

  return(
    <ContainerStyled className="flex flex-col">
      <p>de</p>
    </ContainerStyled>
  )
}

export default ListProductsPage;
