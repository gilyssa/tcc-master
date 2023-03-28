import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import Logotipo from "../../components/Logotipo";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <Logotipo></Logotipo>
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
