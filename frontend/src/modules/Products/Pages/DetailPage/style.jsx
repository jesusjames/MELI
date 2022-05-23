import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const ContainerDetailStyled = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  

  img {
    height: auto;
    width: 100%;
  }
  
  @media(min-width: 640px) {
    grid-template-columns: 60% 40%;
    grid-template-rows:  auto auto;
  }

  @media(min-width: 1024px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows:  auto auto;
  }
`;

export const ImageContainerStyled = styled.div`
  height: 100%;
  width: 80%;
  border-radius: 0.5rem;

  img {
    height: 90%;
    width: 90%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
`;

export const DescriptionStyled = styled.div`
  @media(min-width: 640px) {
    grid-column: 1 / 3;
  }
  
`;
