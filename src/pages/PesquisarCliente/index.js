import React from "react";
import { Button, Table } from "react-bootstrap";
import TableScrollbar from "react-table-scrollbar";
import Logotipo from "../../components/Logotipo";

import * as C from "./styles";

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

    fetch("https://bff-beauty-with-aesthetic.onrender.com/api/clientes?", options)
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
        <>
          <Logotipo></Logotipo>
          <C.Tabela>
            <TableScrollbar rows={6}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                   <td><strong>Clientes Adicionados</strong></td>
                  </tr>
                  {this.state.clientes.map((cliente) => (
                    <tr>
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
        </>
    );
  }
}
export default PesquisarCliente;
