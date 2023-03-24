import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";

import logo1 from "../../img/logo1.png";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const objetos = {
    nome: nome,
    email: email,
    senha: senha,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch("https://web-production-ce70.up.railway.app/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetos),
    }).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("cadastro", JSON.stringify({ objetos }));
        alert("usuario criado com sucesso!");
        return response.json();
      } else {
        alert("Erro ao criar Usuário!");
      }
    });
    navigate("/");
  }

  return (
    <C.Container>
      <C.Content>
        <img src={logo1} />
        <Input
          type="name"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />

        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSubmit} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
