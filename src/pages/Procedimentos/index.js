import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Vertical from "../../components/Logotipo/vertical";

import useAuth from "../../hooks/useAuth";


const Procedimentos = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
        <>
            <Vertical/>
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
