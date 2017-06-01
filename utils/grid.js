import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.fluid ? '0' : '20px'};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;
