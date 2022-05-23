import { CardContainerStyled, ContainerStyled } from './style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../reducer/Products';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { CardItem } from '../../components/CardItem/CardItem';
import { SkeletonStyled } from '../../components/Breadcrumb/style';

const ListProductsPage = () => {
  const { data, isLoading } = useSelector(state => state?.products);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const search = searchParams.get('q');

  useEffect(() => {
    dispatch(ProductsActions.productsFetchInit({ search }));
  }, [search]);

  if(isLoading === false){
    return(
      <ContainerStyled className="flex flex-col mb-2">
        <SkeletonStyled  className="animate-pulse"/>
      </ContainerStyled>
    )
  }

  return(
    <ContainerStyled className="flex flex-col mb-2">
      <Breadcrumb categories={data?.categories} />
      <CardContainerStyled>
        {
          data?.items?.slice(0, 4).map(product => {
            return <CardItem
              key={product?.id}
              image={product?.picture}
              title={product?.title}
              price={product?.price?.amount}
            />
          })
        }
      </CardContainerStyled>
    </ContainerStyled>
  )
}

export default ListProductsPage;
