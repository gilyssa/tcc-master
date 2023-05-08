import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LabelSignup, Strong } from "../../styles/stylesContainer";
import Vertical from "../../components/Logotipo/vertical";
import { Alert } from "@mui/material";
import Spinner from "../../components/Spinner/index";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // adicionar state para mensagem de erro

  const objetos = {
    email: email,
    senha: senha,
  };
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objetos),
      };
      const response = await fetch(
        "https://bff-beauty-with-aesthetic.onrender.com/api/usuarios/login",
        options
      );
      if (response.status === 200) {
        const signin = await response.json();
        localStorage.setItem("signin", JSON.stringify({ signin }));
        navigate("/home");
      } else {
        setErrorMessage("Erro ao fazer login.");
      }
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
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e) => [
          setEmail(e.target.value),
          setError(""),
          setErrorMessage(null),
        ]}
      />
      <Input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={(e) => [
          setSenha(e.target.value),
          setError(""),
          setErrorMessage(null),
        ]}
      />
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? <Spinner /> : <Button Text="Entrar" onClick={handleLogin} />}

      <LabelSignup>
        Não tem uma conta?
        <Strong>
          <Link to="/signup">&nbsp;Registre-se</Link>
        </Strong>
      </LabelSignup>
      <Strong>
        <Link to="/recuperarSenha">&nbsp;Esqueceu sua senha?</Link>
      </Strong>
    </>
  );
};

export default Signin;
