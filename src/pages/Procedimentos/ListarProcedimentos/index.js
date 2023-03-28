import React from "react";
import { Button, Table } from "react-bootstrap";
import Vertical from "../../../components/Logotipo/vertical";

import * as C from "./styles";

class ListarProcedimentos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      procedimentos: [],
      nome: "gabr",
    };
  }
  componentDidMount() {
    this.ListarProcedimentos();
  }
  componentWillUnmount() {}
  ListarProcedimentos = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      },
    };
    fetch("https://bff-beauty-with-aesthetic.onrender.com/api/procedimentos?", options)
      .then((response) => response.json())
      .then((dados) => {
        console.log(dados);
        this.setState({ procedimentos: dados });
      });
  };
  carregarProcedimento = (id) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      },
    };
    fetch(
      "https://react-api-bff.herokuapp.com/api/procedimentos?" + id,
      options
    )
      .then((response) => response.json())
      .then((procedimentos) => {
        this.setState({
          id: procedimentos.id,
          nome: procedimentos.nome,
        });
      });
  };

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };
  submit = () => {
    {
      const procedimento = {
        nome: this.state.nome,
      };
    }
  };
  render() {
    return (
      <>
        <Vertical/>
        <C.Tabela>
          <Table striped bordered hover class="table-dark">
            <tbody>
              <tr>
                <td>Procedimentos</td>
              </tr>
              {this.state.procedimentos.map((procedimentos) => (
                <tr>
                  <td class="ordenacao" title={procedimentos.nome}>
                    {procedimentos.nome}
                    <Button>Atualizar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </C.Tabela>
      </>
    );
  }
}

export default ListarProcedimentos;
