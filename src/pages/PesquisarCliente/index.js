import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import TableScrollbar from "react-table-scrollbar";

class PesquisarCliente extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: [],
    };
  }
  componentDidMount() {
    this.buscarClientes();
  }
  componentWillUnmount() {}

  buscarClientes = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
      },
    };

    fetch("https://web-production-ce70.up.railway.app/api/clientes?", options)
      .then((response) => response.json())
      .then((dados) => {
        this.setState({ clientes: dados });
      });
  };

  // buscarClientes = () => {
  //   const id = JSON.parse(localStorage.getItem("signin")).signin.usuario;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       token: JSON.parse(localStorage.getItem("signin")).signin.token,
  //     },
  //   };

  //   fetch(
  //     "https://react-api-bff.herokuapp.com/api/clientes/usuario/" + id,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((dados) => {
  //       console.log(options);
  //       console.log(JSON.parse(localStorage.getItem("signin")).signin.usuario);

  //       this.setState({ clientes: dados });
  //     });
  // };

  render() {
    return (
      <C.Container>
        <C.Gabriel>
          <label>teste</label>
          <label>teste</label>
        </C.Gabriel>
        <C.Content>
          <C.Tabela>
            <TableScrollbar rows={10}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>NOME</td>
                    <td>EMAIL</td>
                    <td>ALTERAR</td>
                  </tr>
                  {this.state.clientes.map((cliente) => (
                    <tr>
                      <td>{cliente.nome}</td>
                      <td>{cliente.email}</td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => this.deletarClientes(cliente.id)}
                        >
                          Alterar
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => this.deletarClientes(cliente.id)}
                        >
                          Ficha Avaliativa
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableScrollbar>
          </C.Tabela>
        </C.Content>
      </C.Container>
    );
  }
}
export default PesquisarCliente;
