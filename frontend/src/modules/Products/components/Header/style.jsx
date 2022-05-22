import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: var(--meli-background);
  position: fixed;
  width: 100%;
  z-index: 1000;
  left:0;
  top: 0;
`;

export const HeaderContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: center;
`;
