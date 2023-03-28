import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import Logotipo from "../../components/Logotipo";


import * as C from "./styles";
import logo1 from "../../img/logo1.png"
const Clientes = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <Logotipo></Logotipo>
    <Button Text="Cadastrar Cliente" onClick={() => [navigate("/cadastroCliente")]}>
        CadastrarCliente 
      </Button>
      <Button Text="Pesquisar Cliente" onClick={() => [navigate("/pesquisarCliente")]}>
        CadastrarCliente 
      </Button>

      <Button Text="Voltar" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </>
  );
};

export default Clientes;