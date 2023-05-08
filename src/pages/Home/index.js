import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Vertical from "../../components/Logotipo/vertical";

import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Vertical />
      <Button Text="Clientes" onClick={() => [navigate("/clientes")]}>
        CadastrarCliente
      </Button>

      <Button Text="Procedimentos" onClick={() => [navigate("/procedimentos")]}>
        CadastrarCliente
      </Button>

      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </>
  );
};

export default Home;
