import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  

  img {
    height: auto;
    width: 100%;
  }
  
  @media(min-width: 640px) {
    grid-template-columns: 4fr 2fr;
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
