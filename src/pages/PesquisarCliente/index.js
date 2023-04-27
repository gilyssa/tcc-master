import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import Vertical from "../../components/Logotipo/horizontal";

import * as C from "./styles";

const PesquisarCliente = () => {
  const [clientesOriginais, setClientesOriginais] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarClientes = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
      },
    };

    fetch(
      "https://bff-beauty-with-aesthetic.onrender.com/api/clientes?",
      options
    )
      .then((response) => response.json())
      .then((dados) => {
        setClientesOriginais(dados);
        setClientes(dados);
      });
  };

  const deletarClientes = (id) => {
    // implemente a lógica para deletar o cliente com o ID fornecido
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredClientes = clientesOriginais.filter(
      (cliente) => cliente.email === searchValue
    );
    setClientes(filteredClientes);
  };

  const cancelarBusca = () => {
    setSearchValue("");
    setClientes(clientesOriginais);
  };

  return (
    <>
      <Vertical />
      <C.Tabela>
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="formBasicEmail" style={{ width: "auto" }}>
            <Form.Control
              type="email"
              placeholder="Digite o email do cliente"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form.Group>
          <div style={{ display: "flex" }}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100px", marginRight: "10px" }}
            >
              Pesquisar
            </Button>
            <Button
              variant="secondary"
              onClick={cancelarBusca}
              style={{ width: "100px" }}
            >
              Cancelar
            </Button>
          </div>
        </Form>
        <Table striped bordered hover>
          <br></br>
          <tbody>
            <tr>
              <td>
                <strong>Clientes Adicionados</strong>
              </td>
            </tr>
            {clientes.map((cliente) => (
              <tr>
                <td class="ordenacao" title={cliente.email}>
                  {cliente.email}
                  <Button
                    variant="warning"
                    onClick={() => deletarClientes(cliente.id)}
                  >
                    Alterar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deletarClientes(cliente.id)}
                  >
                    Ficha Avaliativa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </C.Tabela>
    </>
  );
};

export default PesquisarCliente;
