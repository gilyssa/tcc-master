import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";
import Vertical from "../../components/Logotipo/vertical";
import { Alert, AlertTitle } from "@mui/material";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // adicionar state para mensagem de erro
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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetch(
        "https://bff-beauty-with-aesthetic.onrender.com/api/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objetos),
        }
      )
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("cadastro", JSON.stringify({ objetos }));
            return response.json();
          } else {
            setErrorMessage("Erro ao cadastrar.");
          }
        })
        .catch((error) => {
          setErrorMessage("Não foi Possivel realizar o cadastro");
        });
      navigate("/");
    } catch (error) {
      setErrorMessage("Ocorreu um erro inesperado.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Vertical />
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
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <Button Text="Inscrever-se" onClick={handleSubmit} />
      )}
      <C.LabelSignin>
        Já tem uma conta?
        <C.Strong>
          <Link to="/">&nbsp;Entre</Link>
        </C.Strong>
      </C.LabelSignin>
    </>
  );
};

export default Signup;
