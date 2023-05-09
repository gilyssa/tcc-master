import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 35px;
  background-color: #deb887;
`;
export const Content = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0px 15px 12px #000;
  background-color: #c8fefe;
  max-width: 350px;
  padding: 15px;
  max-height: 600px;
  border-radius: 30px;
`;
export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;
export const LabelSignin = styled.label`
  font-size: 16px;
  color: #000;
`;
export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000;
  }
`;
export const LabelSignup = styled.label`
  font-size: 16px;
  color: #000;
`;
export const Warning = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
