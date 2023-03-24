import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CadastroCliente from "../pages/CadastroCliente";
import PesquisarCliente from "../pages/PesquisarCliente";
import Clientes from "../pages/Clientes";
import Procedimentos from "../pages/Procedimentos";
import CadastrarProcedimentos from "../pages/Procedimentos/CadastrarProcedimentos";
import ListarProcedimentos from "../pages/Procedimentos/ListarProcedimentos";
import { Teste } from "../pages/TESTE";
import TesteNovo from "../pages/TesteNovo";
import AlterarSenha from "../pages/AlterarSenha";
import FichaAvaliativa from "../pages/FichaAvaliativa";
import RecuperarSenha from "../pages/RecuperarSenha";

const Private = ({ Item }) => {
  const { signin } = useAuth();

  return signin > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    // Aqui estamos criando a parte das rotas do aplicativo e redirecionando-as.
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/clientes" element={<Clientes/>} /> 
          <Route exact path="/teste" element={<Teste/>} /> 
          <Route exact path="/cadastroCliente" element={< CadastroCliente />} />
          <Route exact path="/pesquisarCliente" element={<PesquisarCliente/>} />
          <Route exact path="/procedimentos" element={<Procedimentos/>} />
          <Route exact path="/cadastrarProcedimentos" element={<CadastrarProcedimentos/>} />
          <Route exact path="/listarProcedimentos" element={<ListarProcedimentos/>} />
          <Route exact path="/testeNovo" element={<TesteNovo/>} />
          <Route exact path="/recuperarSenha" element={<RecuperarSenha/>} />
          <Route exact path="/alterarSenha" element={<AlterarSenha/>} />
          <Route exact path="/fichaAvaliativa" element={<FichaAvaliativa/>} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
