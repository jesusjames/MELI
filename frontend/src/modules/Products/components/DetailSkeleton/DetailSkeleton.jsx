import { ContainerStyled } from '../../Pages/DetailPage/style';
import Button from '../Button/Button';
import { SkeletonStyled } from './style';

export const DetailSkeleton = () => {
  return(
    <ContainerStyled className="animate-pulse">
      <SkeletonStyled height="400px" width="90%" />
      <div className="w-full">
        <SkeletonStyled className="font-1 mt-1 mb-1" />
        <SkeletonStyled height="1.5rem" width="100%" className="mb-2" />
        <SkeletonStyled height="2rem" className="font-2 mb-3" />
        <SkeletonStyled height="3rem" width="100%" className="br-4"/>
      </div>
      <div>
        <SkeletonStyled width="30%" className="mt-1" />
        <SkeletonStyled width="90%" className="mt-2" />
        <SkeletonStyled  width="80%"className="mt-1" />
        <SkeletonStyled className="mt-1" />
      </div>
    </ContainerStyled>
  )
}

export default  DetailSkeleton;
