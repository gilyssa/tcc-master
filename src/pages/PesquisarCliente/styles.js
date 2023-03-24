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
  height: 600px;
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
`;
export const Tabela = styled.div`
  flex-direction: row;
  display: flex;
  max-height: 800px;
  align-items: center;
  padding: 25px;

  table {
    max-height: 600px;
  }
  th {
    height: 200px;
  }
  td {
    border: 2px solid;
    height: 25px;
    width: 700px;
    align-items: center;
    text-align: center;
    color: black;
  }
`;
