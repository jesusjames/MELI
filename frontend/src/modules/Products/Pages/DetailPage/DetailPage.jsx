import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { BreadcrumbSkeletonStyled } from '../../components/Breadcrumb/style';
import { useEffect } from 'react';
import { ProductsActions } from '../../reducer/Products';
import { useParams } from 'react-router-dom';
import { ContainerStyled, ImageContainerStyled } from './style';
import Button from '../../components/Button/Button';
import DetailSkeleton from '../../components/DetailSkeleton/DetailSkeleton';

export const DetailPage = () => {
  const { data, isLoading, error } = useSelector(state => state?.products);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(ProductsActions.productFetchInit({ id }))
  }, [])

  if(error) {
    return <div className="w-full p-2 bg-white br-4 mb-2">
      <h4>No se encontraron datos</h4>
    </div>
  }

  const conditionText = data?.item?.condition === 'new' ? 'Nuevo' : data?.item?.condition;

  return(
    <>
      {!isLoading ? <Breadcrumb categories={data?.categories}/> : <BreadcrumbSkeletonStyled />}
      <div className="w-full p-2 bg-white br-4 mb-2">
        {isLoading ?
          <DetailSkeleton /> :
          (
            <ContainerStyled>
              <ImageContainerStyled>
                <img src={data?.item?.picture} alt={data?.item?.title} />
              </ImageContainerStyled>
              <div className="w-full">
                <p className="font-1 mt-1 mb-1">{`${conditionText} - ${data?.item?.sold_quantity} vendidos`}</p>
                <h2 className="mb-2">{data?.item?.title}</h2>
                <p className="font-2 mb-3">$ {data?.item?.price?.amount}</p>
                <Button block color="primary" className="br-4">
                  Comprar
                </Button>
              </div>
              <div>
                <h3 className="mt-1">Descripción del producto</h3>
                <p className="mt-2">{data?.item?.description}</p>
              </div>
            </ContainerStyled>
          )
        }
      </div>
    </>
  )
}

export default DetailPage;
