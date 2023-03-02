import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 7px;

  &:nth-of-type(1) {
    background-color: #62d162;
  }
  &:nth-of-type(2) {
    background-color: #00d6f7;
  }
  &:nth-of-type(3) {
    background-color: red;
  }

  &:hover {
    box-shadow: 1px 1px 6px 3px rgb(34 60 80 / 54%) inset;
  }
`;
