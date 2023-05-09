import { Alert, Box, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Vertical from '../../components/Logotipo/vertical';
import Spinner from '../../components/Spinner/index';
import { LabelSignup, Strong } from '../../styles/stylesContainer';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const objetos = {
    email: email,
    senha: senha,
  };

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objetos),
      };
      const response = await fetch(
        'https://bff-beauty-with-aesthetic.onrender.com/api/usuarios/login',
        options,
      );
      if (response.status === 200) {
        const signin = await response.json();
        localStorage.setItem('signin', JSON.stringify({ signin }));
        setIsSuccessModalOpen(true);
      } else {
        setErrorMessage('Erro ao fazer login.');
      }
    } catch (error) {
      setErrorMessage('Ocorreu um erro inesperado.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleCloseSuccessModal() {
    setIsSuccessModalOpen(false);
    navigate('/home');
  }

  return (
    <>
      <Vertical />

      <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e) => [
          setEmail(e.target.value),
          setError(''),
          setErrorMessage(null),
        ]}
      />
      <Input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={(e) => [
          setSenha(e.target.value),
          setError(''),
          setErrorMessage(null),
        ]}
      />
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isLoading ? <Spinner /> : <Button Text="Entrar" onClick={handleLogin} />}

      <LabelSignup>
        Não tem uma conta?
        <Strong>
          <Link to="/signup">&nbsp;Registre-se</Link>
        </Strong>
      </LabelSignup>
      <Strong>
        <Link to="/recuperarSenha">&nbsp;Esqueceu sua senha?</Link>
      </Strong>

      <Modal
        open={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 230,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
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

export default Signin;
