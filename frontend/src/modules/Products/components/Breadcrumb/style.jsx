import styled from 'styled-components';

export const TextStyled = styled.p`
  padding: 0.5rem 0 0.8rem 0;
  color: #4f4f4f;
  font-size: 0.8rem;

  span {
    vertical-align: middle;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const ContainerStyled = styled.div`
  p:last-child {
    span {
      display: none;
    }
  }
`;

export const BreadcrumbSkeletonStyled = styled.div`
  background: #e3e3e3;
  height: 1rem;
  width: 300px;
  margin: 0.5rem 0 0.8rem 0;
  border-radius: 0.5rem;
`;
