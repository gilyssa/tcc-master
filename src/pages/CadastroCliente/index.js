import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";

import logo1 from "../../img/logo1.png";

const CadastroCliente = () => {
  const [nome, setNome] = useState(""); //ok
  const [email, setEmail] = useState(""); //ok

  const [telefone, setTelefone] = useState(""); //ok
  const [cpf, setCpf] = useState(""); //ok
  const [error, setError] = useState("");
  const [data_nascimento, setData_nascimento] = useState(""); //ok
  const [tipo_sanguineo, setTipo_sanguineo] = useState(""); //ok
  const [alergias, setAlergias] = useState(""); //ok
  const navigate = useNavigate();

  const objetos = {
    nome: nome,
    email: email,
    telefone: telefone,
    cpf: cpf,
    data_nascimento: data_nascimento,
    tipo_sanguineo: tipo_sanguineo,
    alergias: alergias,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const usuario = {
      usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
    };
    var total = Object.assign(objetos, usuario);

    console.log(total);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
      },
      body: JSON.stringify(total),
    };

    return fetch(
      "https://bff-beauty-with-aesthetic.onrender.com/api/clientes",
      options
    ).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("cadastro", JSON.stringify({ objetos }));
        alert("Cliente cadastrado com sucesso!");
        return response.json(), navigate("/home");
      } else {
        alert("Cliente nao Cadastrado!");
      }
    });
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
          type="text"
          placeholder="Digite seu CPF "
          value={cpf}
          onChange={(e) => [setCpf(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Digite seu tipo sanguineo"
          value={tipo_sanguineo}
          onChange={(e) => [setTipo_sanguineo(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Digite sua Data de aniversário"
          value={data_nascimento}
          onChange={(e) => [setData_nascimento(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Digite seu telefone "
          value={telefone}
          onChange={(e) => [setTelefone(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Alergia"
          value={alergias}
          onChange={(e) => [setAlergias(e.target.value), setError("")]}
        />

        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar Cliente" onClick={handleSubmit} />
      </C.Content>
    </C.Container>
  );
};

export default CadastroCliente;
