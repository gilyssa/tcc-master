import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Vertical from "../../components/Logotipo/vertical";

import * as C from "./styles";

const AlterarSenha = () => {
  const navigate = useNavigate();

  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const objetos = {
    senha: senha,
    codigo: codigo,
  };

  async function TrocarSenha() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetos),
    };

    return fetch(
      "https://bff-beauty-with-aesthetic.onrender.com/api/usuarios/recovery",
      options
    ).then((response) => {
      if (response.status === 200) {
        navigate("/signin");
        alert("Senha alterada com sucesso!");
      } else {
        alert("Erro ao alterar sua senha!");
      }
    });
  }

  return (
     <>
         <Vertical/>
        <label>Digite os dados para a recuperar sua senha.</label>
        <Input
          type="number"
          placeholder="Informe o Codigo"
          value={codigo}
          onChange={(e) => [setCodigo(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="informe Sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Enviar" onClick={TrocarSenha} />
      </>
  );
};

export default AlterarSenha;
