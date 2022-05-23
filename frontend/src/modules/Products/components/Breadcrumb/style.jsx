import styled from 'styled-components';

export const TextStyled = styled.p`
  padding: 0.5rem 0;
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
