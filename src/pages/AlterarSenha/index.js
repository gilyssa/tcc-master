import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Vertical from "../../components/Logotipo/vertical";
import { Alert } from "@mui/material";
import Spinner from "../../components/Spinner/index";
const AlterarSenha = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // adicionar state para mensagem de erro
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const objetos = {
    senha: senha,
    codigo: codigo,
  };
  async function TrocarSenha(e) {
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

      await fetch(
        "https://bff-beauty-with-aesthetic.onrender.com/api/usuarios/recovery",
        options
      ).then((response) => {
        if (response.status === 200) {
          navigate("/signin");
        } else {
          setErrorMessage("Erro ao alterar sua senha!");
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
      <label>Digite os dados para a recuperar sua senha.</label>
      <Input
        type="number"
        placeholder="Informe o Codigo"
        value={codigo}
        onChange={(e) => [setCodigo(e.target.value), setError("")]}
      />
      <Input
        type="password"
        placeholder="informe Sua Senha"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
      />
      <labelError>{error}</labelError>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? (
        <Spinner />
      ) : (
        <Button Text="Alterar Senha" onClick={TrocarSenha} />
      )}
      <Button Text="Voltar" onClick={() => [navigate("/recuperarSenha")]} />
    </>
  );
};

export default AlterarSenha;
