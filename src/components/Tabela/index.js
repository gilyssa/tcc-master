import styled from "styled-components";

export const Tabela = styled.div`
  flex-direction: row;
  align-items: center;
  padding: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  width: 340px;
  max-width: 100%;
  /* width */
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #deb887;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #deb887;
  }

  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ordenacao {
    display: flex;
    flex-direction: column;
  }
  table tbody tr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .button-container {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;
export default Tabela;
