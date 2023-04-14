import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpanContact = styled.span`
  font-size: 20px;
  font-weight: 400;
  width: 180px;
`;

export const NumberContact = styled('span')`
  font-weight: 600;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 8px;
  display: inline-flex;
  font-size: 20px;
  border: none;
  background-color: #dc143c;
  border-radius: 50%;
  cursor: pointer;
  color: white;
`;
