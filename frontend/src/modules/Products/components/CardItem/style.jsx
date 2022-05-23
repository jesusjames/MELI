import styled from 'styled-components';

export const CardStyled = styled.div`
  cursor: pointer;
  margin: 0 1rem;
  padding: 5px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 196px auto 50px;
  border-bottom: 1px solid #cccccc;

  @media (min-width: 640px) {
    grid-template-columns: 196px auto;
    grid-template-rows: auto;
  };
`;

export const ImageContainerStyled = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 4px;
  background: #e3e3e3;

  img {
    height: 100%;
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
`;
