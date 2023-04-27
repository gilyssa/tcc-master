import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Vertical from "../../components/Logotipo/vertical";
import { Alert } from "@mui/material";
import * as C from "./styles";
import "./styles.css";

const RecuperarSenha = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // adicionar state para mensagem de erro
  const objetos = {
    email: email,
  };

  async function enviarEmail(e) {
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
        "https://bff-beauty-with-aesthetic.onrender.com/api/usuarios/email",
        options
      ).then((response) => {
        if (response.status === 200) {
          navigate("/alterarSenha");
        } else {
          setErrorMessage("Erro ao enviar o email, tente novamente!");
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
      <Vertical />
      <label>Digite o email para recuperação</label>
      <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />

      <C.labelError>{error}</C.labelError>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <Button Text="Entrar" onClick={enviarEmail} />
      )}
      <Button Text="Voltar" onClick={() => [navigate("/")]} />
    </>
  );
};

export default RecuperarSenha;
