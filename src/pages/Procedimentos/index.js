import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import Logotipo from "../../components/Logotipo";

import * as C from "./styles";

const Procedimentos = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
        <>
            <Logotipo></Logotipo>
            <Button Text="Adicionar Procedimento" onClick={() => [navigate("/cadastrarProcedimentos")]}>
         
            </Button>

            <Button Text="Listar Procedimentos" onClick={() => [navigate("/listarProcedimentos")]}>
         
            </Button>

            <Button Text="Voltar" onClick={() => [signout(), navigate("/")]}>
        
            </Button>
        </>
  );
};



export default Procedimentos;
