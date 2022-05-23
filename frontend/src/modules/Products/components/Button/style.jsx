import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  ${({ block }) => block && css`width: 100%;`}
  padding: 10px;
  border: none;
  cursor: pointer;
  background: ${({ color }) => color === 'secondary' ? 'var(--white-color)' : '#0287d5'};
  color: ${({ color }) => color === 'secondary' ? '#333333' : 'white'};

  :hover {
    background: ${({ color }) => color === 'secondary' ? '#cecece' : '#007eff'};
  }
  
  :active {
    background: ${({ color }) => color === 'secondary' ? '#cecece' : '#007eff'};
  }
`;
