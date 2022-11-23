import styled from "styled-components";

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh 5vw;
  width: 60%;
  background-color: #ffffff;
`;

export const Tittle = styled.p`
  font-weight: 800;
  font-size: 1.5vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ValueInput = styled.input`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #dce5ea;
`;

export const Input = styled.input`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #dce5ea;
`;

export const Label = styled.label`
  font-size: 1vw;
  margin-bottom: 0.9vh;
`;

export const DivCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10%;
`;

export const CheckBox = styled.input``;

export const CheckBoxLabel = styled.p``;

export const ErrorLabel = styled.p`
  font-size: 0.8vw;
  margin: 0.5vh 0 1.5vh 0;
  color: red;
`;
