import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 0 10px;
  border: none;
  cursor: pointer;
  background: var(--white-color);
  color: #333333;

  :hover {
    background: #cecece;
  }
  
  :active {
    background: #cecece;
  }
`;
