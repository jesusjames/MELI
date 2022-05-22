import styled from 'styled-components';

export const InputStyled = styled.input`
  height: 36px;
  width: ${({ block }) => block && '100%'};
  padding: 10px;
  border: none;
  
  &:focus {
    outline: none;
  }
`;
