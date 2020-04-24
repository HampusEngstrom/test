import styled from 'styled-components';

export const Label = styled.label`
  text-transform: capitalize;
  padding: 0 10px;
  align-items: center;
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border-top: 1px solid lightgray;
  &:first-of-type {
    border: none;
  }
`;

export const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;
