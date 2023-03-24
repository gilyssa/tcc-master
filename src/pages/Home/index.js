import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

import * as C from "./styles";
import logo1 from "../../img/logo1.png"
const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
    <C.Content>
    <img  src={logo1 }/>
    <Button Text="Clientes" onClick={() => [navigate("/clientes")]}>
        CadastrarCliente 
      </Button>

    <Button Text="Procedimentos" onClick={() => [navigate("/procedimentos")]}>
        CadastrarCliente 
      </Button>

      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Content>
    </C.Container>
  );
};



export default Home;
