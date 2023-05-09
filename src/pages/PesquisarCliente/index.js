import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Vertical from '../../components/Logotipo/horizontal';
import * as C from './styles';

const PesquisarClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [nomeBusca, setNomeBusca] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    listarClientes();
  }, []);

  const listarClientes = () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: JSON.parse(localStorage.getItem('signin')).signin.token,
        usuario_id: JSON.parse(localStorage.getItem('signin')).signin.usuario,
      },
    };

    setIsLoading(true); // Start loading
    fetch(
      'https://bff-beauty-with-aesthetic.onrender.com/api/clientes?',
      options,
    )
      .then((response) => response.json())
      .then((dados) => {
        setClientes(dados);
        setIsLoading(false); // Stop loading
      });
  };

  const atualizarNomeBusca = (e) => {
    setNomeBusca(e.target.value);
  };

  const filtrarClientes = () => {
    return clientes.filter((cliente) =>
      cliente.nome.toLowerCase().includes(nomeBusca.toLowerCase()),
    );
  };

  return (
    <>
      <Vertical />
      <label style={{ fontSize: '20px' }}>Pesquisar Cliente</label>
      <input
        type="text"
        value={nomeBusca}
        onChange={atualizarNomeBusca}
        style={{ width: '300px', borderRadius: '5px' }}
      />
      <C.Content>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {isLoading ? (
            <div>Buscando...</div> // Display loading message or spinner when isLoading is true
          ) : (
            filtrarClientes().map((cliente) => (
              <div
                key={cliente.id}
                style={{
                  margin: '5px 0',
                }}
              >
                <Button
                  style={{
                    width: '260px',
                  }}
                  variant="secondary"
                  onClick={() => navigate('/fichaAvaliativa')}
                >
                  {cliente.nome}
                </Button>
              </div>
            ))
          )}
        </div>
      </C.Content>
      <Button
        style={{
          width: '260px',
          alignItems: 'left',
        }}
        onClick={() => navigate('/clientes')}
      >
        Voltar
      </Button>
    </>
  );
};

export default PesquisarClientes;
