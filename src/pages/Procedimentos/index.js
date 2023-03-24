import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

import * as C from "./styles";
import logo1 from "../../img/logo1.png"
const Procedimentos = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
    <C.Content>
    <img  src={logo1 }/>
    <Button Text="Adicionar Procedimento" onClick={() => [navigate("/cadastrarProcedimentos")]}>
         
      </Button>

    <Button Text="Listar Procedimentos" onClick={() => [navigate("/listarProcedimentos")]}>
         
      </Button>

      <Button Text="Voltar" onClick={() => [signout(), navigate("/")]}>
        
      </Button>
    </C.Content>
    </C.Container>
  );
};



export default Procedimentos;
