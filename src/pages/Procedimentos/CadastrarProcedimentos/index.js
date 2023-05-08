import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Vertical from "../../../components/Logotipo/vertical";
import { Alert } from "@mui/material";
import * as C from "./styles";

const CadastrarProcedimentos = () => {
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // adicionar state para mensagem de erro
  const navigate = useNavigate();

  const objetos = {
    nome: nome,
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (nome.trim().split(" ").length < 1) {
      setError("Por favor, digite um nome com pelo menos três palavras.");
      return;
    }
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
        "https://bff-beauty-with-aesthetic.onrender.com/api/procedimentos",
        options
      ).then((response) => {
        localStorage.setItem("cadastro", JSON.stringify({ objetos }));
        return response.json(), alert("ok"), navigate("/home");
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
      <Input
        type="text"
        placeholder="Digite o nome do novo Procedimento"
        value={nome}
        onChange={(e) => [setNome(e.target.value), setError("")]}
      />
      <C.labelError>{error}</C.labelError>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <Button Text="Criar" onClick={handleSubmit} />
      )}
    </>
  );
};

export default CadastrarProcedimentos;
