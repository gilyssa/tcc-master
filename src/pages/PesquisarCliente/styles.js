import styled from 'styled-components';

export const Content = styled.div`
  width: 300px;
  height: 300px;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
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
`;
