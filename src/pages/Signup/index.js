import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LabelSignin, Strong } from "../../styles/stylesContainer";
import Vertical from "../../components/Logotipo/vertical";
import { Alert } from "@mui/material";
import Spinner from "../../components/Spinner/index";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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
      const response = await fetch(
        "https://bff-beauty-with-aesthetic.onrender.com/api/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objetos),
        }
      );

      if (response.status === 200) {
        localStorage.setItem("cadastro", JSON.stringify({ objetos }));
        navigate("/");
      } else {
        setErrorMessage("Erro ao cadastrar.");
      }
    } catch (error) {
      setErrorMessage("Não foi Possivel realizar o cadastro");
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
      <labelError>{error}</labelError>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? (
        <Spinner />
      ) : (
        <Button Text="Inscrever-se" onClick={handleSubmit} />
      )}
      <LabelSignin>
        Já tem uma conta?
        <Strong>
          <Link to="/">&nbsp;Entre</Link>
        </Strong>
      </LabelSignin>
    </>
  );
};

export default Signup;
