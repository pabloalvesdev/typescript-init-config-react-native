import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background.primary};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.colors.text.primary};
  `}
`;

export const Switch = styled.Switch`
  position: absolute;
  right: 40px;
  top: 50px;
`;
