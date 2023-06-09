import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  gap: 30px;
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(50px);
  box-shadow: 0px 2px 8px 1px grey;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 350px;
  gap: 10px;
`;

export const Input = styled(Field)`
  padding: 10px 10px;
  border: none;
  font-size: 20px;
  box-shadow: 0px 2px 18px 0px grey;
  border-radius: 25px;
  &:focus {
    outline: none;
  }
`;

export const ErrorForm = styled(ErrorMessage)`
  margin: 5px 0;
  color: red;
`;

export const FormBtn = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  background-color: #f2e06c;
  border-radius: 25px;
  cursor: pointer;
  color: white;
`;
