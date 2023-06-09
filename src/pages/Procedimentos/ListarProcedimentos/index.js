import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Vertical from "../../../components/Logotipo/vertical";
import { Tabela } from "../../../components/Tabela/index";

const ListarProcedimentos = () => {
  const [procedimentos, setProcedimentos] = useState([]);
  const [nomeBusca, setNomeBusca] = useState("");
  useEffect(() => {
    listarProcedimentos();
  }, []);
  const listarProcedimentos = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      },
    };
    fetch(
      "https://bff-beauty-with-aesthetic.onrender.com/api/procedimentos?",
      options
    )
      .then((response) => response.json())
      .then((dados) => {
        setProcedimentos(dados);
      });
  };

  const carregarProcedimento = (id) => {
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
        setNomeBusca(procedimentos.nome);
      });
  };

  const atualizarNomeBusca = (e) => {
    setNomeBusca(e.target.value);
  };

  const filtrarProcedimentos = () => {
    return procedimentos.filter((procedimento) =>
      procedimento.nome.toLowerCase().includes(nomeBusca.toLowerCase())
    );
  };

  return (
    <>
      <Vertical />
      <Tabela>
        <label style={{ fontSize: "19px" }}>
          Digite o nome do Procedimento
        </label>
        <br></br>
        <input type="text" value={nomeBusca} onChange={atualizarNomeBusca} />
        <br></br>
        <br></br>
        <Table striped bordered hover class="table-dark">
          <tbody>
            <tr style={{ backgroundColor: "black" }}>
              <td style={{ fontSize: "20px", color: "white" }}>
                Procedimentos
              </td>
            </tr>
            {filtrarProcedimentos().map((procedimento) => (
              <tr key={procedimento.id}>
                <td
                  class="ordenacao"
                  title={procedimento.nome}
                  style={{ fontSize: "20px" }}
                >
                  {procedimento.nome}
                  {nomeBusca && <Button variant="secondary">Atualizar</Button>}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tabela>
    </>
  );
};

export default ListarProcedimentos;
