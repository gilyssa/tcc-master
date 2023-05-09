import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Alert } from "@mui/material";
import Spinner from "../../components/Spinner/index";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [tipo_sanguineo, setTipo_sanguineo] = useState("");
  const [alergias, setAlergias] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Adiciona o estado para o modal
  const navigate = useNavigate();

  const objetos = {
    nome: nome,
    email: email,
    telefone: telefone,
    cpf: cpf,
    data_nascimento: data_nascimento,
    tipo_sanguineo: tipo_sanguineo,
    alergias: alergias,
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const usuario = {
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      };
      var total = Object.assign(objetos, usuario);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: JSON.parse(localStorage.getItem("signin")).signin.token,
        },
        body: JSON.stringify(total),
      };

      await fetch(
        "https://bff-beauty-with-aesthetic.onrender.com/api/clientes",
        options
      ).then((response) => {
        if (response.status === 200) {
          localStorage.setItem("cadastro", JSON.stringify({ objetos }));
          setIsSuccessModalOpen(true); // Abre o modal em caso de sucesso
          return response.json(), navigate("/home");
        } else {
          alert("Cliente nao Cadastrado!");
        }
      });
    } catch (error) {
      setErrorMessage("Ocorreu um erro inesperado.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleCloseSuccessModal() {
    setIsSuccessModalOpen(false); // Fecha o modal em caso de sucesso
  }
  return (
    <>
      <Input
        type="name"
        placeholder="Nome"
        value={nome}
        onChange={(e) => [setNome(e.target.value), setError("")]}
      />
      <Input
        type="text"
        placeholder="CPF "
        value={cpf}
        onChange={(e) => [setCpf(e.target.value), setError("")]}
      />

      <Input
        type="text"
        placeholder="Tipo sanguíneo"
        value={tipo_sanguineo}
        onChange={(e) => [setTipo_sanguineo(e.target.value), setError("")]}
      />
      <Input
        type="text"
        placeholder="Aniversário"
        value={data_nascimento}
        onChange={(e) => [setData_nascimento(e.target.value), setError("")]}
      />
      <Input
        type="text"
        placeholder="Telefone "
        value={telefone}
        onChange={(e) => [setTelefone(e.target.value), setError("")]}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <Input
        type="text"
        placeholder="Alergia"
        value={alergias}
        onChange={(e) => [setAlergias(e.target.value), setError("")]}
      />
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? (
        <Spinner />
      ) : (
        <Button Text="Inscrever-se" onClick={handleSubmit} />
      )}

      <Modal
        open={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 230,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Login efetuado!
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }} />
          <Button Text="OK!" onClick={handleCloseSuccessModal} />
        </Box>
      </Modal>
    </>
  );
};

export default CadastroCliente;
