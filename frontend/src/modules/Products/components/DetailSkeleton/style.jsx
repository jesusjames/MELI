import styled from 'styled-components';

export const ImageContainerStyled = styled.div`
  height: 400px;
  width: 90%;
  border-radius: 0.5rem;
  background: #e3e3e3;
`;

export const SkeletonStyled = styled.div`
  height: ${({ height }) => height ? height : '1rem'};
  width: ${({ width }) => width ? width : '50%'};
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0.5rem'};
  background: #e3e3e3;
`;
