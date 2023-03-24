import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";

import logo1 from "../../img/logo1.png";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const objetos = {
    email: email,
    senha: senha,
  };

  async function handleLogin(event) {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetos),
    };

    return fetch(
      "https://web-production-ce70.up.railway.app/api/usuarios/login",
      options
    )
      .then((response) => {
        if (response.status === 200) {
          alert("ok!");
          navigate("/home");
          return response.json();
        } else {
          alert("erro!");
        }
      })
      .then((signin) => {
        localStorage.setItem("signin", JSON.stringify({ signin }));
        const login = localStorage.getItem("signin");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <C.Container>
      <C.Content>
        <img src={logo1} />

        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
        <C.Strong>
          <Link to="/recuperarSenha">&nbsp;Esqueceu sua senha?</Link>
        </C.Strong>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
