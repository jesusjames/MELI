import { ContainerStyled } from './style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../reducer/Products';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const ListProductsPage = () => {
  const { data, isLoading } = useSelector(state => state?.products);
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
      <Breadcrumb categories={data?.categories} />
    </ContainerStyled>
  )
}

export default ListProductsPage;
