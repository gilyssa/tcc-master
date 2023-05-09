import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Vertical from "../../components/Logotipo/horizontal";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
const PesquisarClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [nomeBusca, setNomeBusca] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    listarClientes();
  }, []);

  const listarClientes = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      },
    };
    fetch(
      "https://bff-beauty-with-aesthetic.onrender.com/api/clientes?",
      options
    )
      .then((response) => response.json())
      .then((dados) => {
        setClientes(dados);
      });
  };

  const carregarCliente = (id) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      },
    };
    fetch(
      "https://bff-beauty-with-aesthetic.onrender.com/api/clientes?" + id,
      options
    )
      .then((response) => response.json())
      .then((cliente) => {
        // implemente o código para carregar o cliente
      });
  };

  const atualizarNomeBusca = (e) => {
    setNomeBusca(e.target.value);
  };

  const filtrarClientes = () => {
    return clientes.filter((cliente) =>
      cliente.nome.toLowerCase().includes(nomeBusca.toLowerCase())
    );
  };

  return (
    <>
      <Vertical />
      <C.Tabela style={{ overflowX: "hidden" }}>
        <label style={{ fontSize: "20px" }}>Digite o nome do Cliente</label>
        <br />
        <input type="text" value={nomeBusca} onChange={atualizarNomeBusca} />
        <br />
        <br />
        <Table striped bordered hover>
          <tbody>
            <tr style={{ backgroundColor: "black" }}>
              <td style={{ fontSize: "22px", color: "white" }}>Clientes</td>
            </tr>
            {filtrarClientes().map((cliente) => (
              <tr>
                <td
                  className="ordenacao"
                  title={cliente.nome}
                  style={{ fontSize: "20px" }}
                >
                  {cliente.nome}
                  {nomeBusca && (
                    <div
                      style={{
                        margin: "5 5 5 5",
                      }}
                    >
                      <div style={{ marginBottom: "5px" }}>
                        <Button variant="secondary">Atualizar</Button>
                      </div>

                      <div>
                        <Button
                          variant="secondary"
                          onClick={() => navigate("/fichaAvaliativa")}
                        >
                          Ficha Avaliativa
                        </Button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </C.Tabela>
    </>
  );
};

export default PesquisarClientes;
