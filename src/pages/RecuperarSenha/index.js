import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

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
      "https://web-production-ce70.up.railway.app/api/usuarios/email",
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
    <C.Container>
      <C.Content>
        <label>Digite o email para recuperação</label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <C.labelError>{error}</C.labelError>
        <Button Text="Enviar" onClick={enviarEmail} />
      </C.Content>
    </C.Container>
  );
};

export default RecuperarSenha;
