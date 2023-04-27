import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Alert } from "@mui/material";
import * as C from "./styles";

const CadastroCliente = () => {
  const [nome, setNome] = useState(""); //ok
  const [email, setEmail] = useState(""); //ok
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // adicionar state para mensagem de erro
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
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const usuario = {
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      };
      var total = Object.assign(objetos, usuario);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: JSON.parse(localStorage.getItem("signin")).signin.token,
        },
        body: JSON.stringify(total),
      };

      await fetch(
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
    } catch (error) {
      setErrorMessage("Ocorreu um erro inesperado.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Input
        type="name"
        placeholder="Nome"
        value={nome}
        onChange={(e) => [setNome(e.target.value), setError("")]}
      />
      <Input
        type="text"
        placeholder="CPF "
        value={cpf}
        onChange={(e) => [setCpf(e.target.value), setError("")]}
      />

      <Input
        type="text"
        placeholder="Tipo sanguíneo"
        value={tipo_sanguineo}
        onChange={(e) => [setTipo_sanguineo(e.target.value), setError("")]}
      />
      <Input
        type="text"
        placeholder="Aniversário"
        value={data_nascimento}
        onChange={(e) => [setData_nascimento(e.target.value), setError("")]}
      />
      <Input
        type="text"
        placeholder="Telefone "
        value={telefone}
        onChange={(e) => [setTelefone(e.target.value), setError("")]}
      />
      <Input
        type="email"
        placeholder="E-mail"
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
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <Button Text="Inscrever-se" onClick={handleSubmit} />
      )}
    </>
  );
};

export default CadastroCliente;
