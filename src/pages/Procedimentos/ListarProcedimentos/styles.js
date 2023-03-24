import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #deb887;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  box-shadow: 0 0px 15px 12px #000;
  background-color: #c8fefe;
  max-width: 1200px;
  padding: 20px;
  border-radius: 30px;
  font-size: 16px;
`;
export const Gabriel = styled.div`
  flex-direction: row;
  display: flex;
  height: 200px;
  align-items: center;
  padding: 20px;
  gap: 15px;
  max-width: 500px;
`;

export const Tabela = styled.div`
  flex-direction: row;
  display: flex;
  height: 300px;
  align-items: center;
  padding: 25px;
  gap: 15px;

  table,
  th,
  td {
    border: 2px solid;
    width: 500px;
    align-items: center;
    text-align: center;
    color: black;
  }
`;
