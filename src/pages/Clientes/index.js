import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Vertical from "../../components/Logotipo/vertical";

import useAuth from "../../hooks/useAuth";

const Clientes = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Vertical />
      <Button
        Text="Cadastrar Cliente"
        onClick={() => [navigate("/cadastroCliente")]}
      >
        CadastrarCliente
      </Button>
      <Button
        Text="Pesquisar Cliente"
        onClick={() => [navigate("/pesquisarCliente")]}
      >
        CadastrarCliente
      </Button>

      <Button Text="Voltar" onClick={() => [signout(), navigate("/home")]}>
        Sair
      </Button>
    </>
  );
};

export default Clientes;
