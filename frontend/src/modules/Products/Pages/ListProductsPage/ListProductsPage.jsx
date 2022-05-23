import { CardContainerStyled, ContainerStyled } from './style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../reducer/Products';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { CardItem } from '../../components/CardItem/CardItem';
import { BreadcrumbSkeletonStyled } from '../../components/Breadcrumb/style';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';

const ListProductsPage = () => {
  const { data, isLoading } = useSelector(state => state?.products);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = searchParams.get('q');

  useEffect(() => {
    dispatch(ProductsActions.productsFetchInit({ search }));
  }, [search]);

  const navigateDetailProduct = (id) => {
    navigate(`${id}`);
  }

  if(isLoading){
    return(
      <ContainerStyled className="flex flex-col mb-2">
        <BreadcrumbSkeletonStyled  className="animate-pulse"/>
        <CardSkeleton lengthCards={4} />
      </ContainerStyled>
    )
  }

  const noData = Object.keys(data).length === 0;

  return(
    <ContainerStyled className="flex flex-col mb-2">
      <Breadcrumb categories={data?.categories} />
      <CardContainerStyled>
        {noData && <h4>No se encontraron datos</h4>}
        {
          data?.items?.slice(0, 4).map(product => {
            const {id, picture, title, price: { amount }} = product;

            return <CardItem
              key={id}
              idProduct={id}
              image={picture}
              title={title}
              price={amount}
              onClick={() => navigateDetailProduct(id)}
            />
          })
        }
      </CardContainerStyled>
    </ContainerStyled>
  )
}

export default ListProductsPage;
