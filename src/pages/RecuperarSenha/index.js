import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Vertical from "../../components/Logotipo/vertical";


import * as C from "./styles";

const RecuperarSenha = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const objetos = {
    email: email,
  };

  async function enviarEmail() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetos),
    };

    return fetch(
      "https://bff-beauty-with-aesthetic.onrender.com/api/usuarios/email",
      options
    ).then((response) => {
      if (response.status === 200) {
        navigate("/alterarSenha");
      } else {
        alert("Erro ao enviar o email, tente novamente!");
      }
    });
  }

  return (
      <>
        <Vertical/>
        <label>Digite o email para recuperação</label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <C.labelError>{error}</C.labelError>
        <Button Text="Enviar" onClick={enviarEmail} />
      </>
  );
};

export default RecuperarSenha;
