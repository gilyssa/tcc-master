import React, { Component } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import * as C from "./styles";
export class Teste extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
      nome: '',
      alunos: [],
      modalAberta: false
    };
    this.buscarAlunos = this.buscarAlunos.bind(this);
    this.buscarAluno = this.buscarAluno.bind(this);
    this.atualizarAluno = this.atualizarAluno.bind(this);
    this.renderTabela = this.renderTabela.bind(this);
    this.abrirModalInserir = this.abrirModalInserir.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.atualizaNome = this.atualizaNome.bind(this);
  }

  componentDidMount() {
    this.buscarAlunos();
  }

  buscarAlunos() {
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "token":JSON.parse(localStorage.getItem("signin")).signin.token,
          "usuario_id": JSON.parse(localStorage.getItem("signin")).signin.usuario,
        }
      };
    fetch('https://react-api-bff.herokuapp.com/api/procedimentos?',options)
      .then(response => response.json())
      .then(data => this.setState({ alunos: data }));
  }
  buscarAluno(id) {
   
    fetch('https://react-api-bff.herokuapp.com/api/procedimentos?' + id,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
      "token":JSON.parse(localStorage.getItem("signin")).signin.token,
      "usuario_id": JSON.parse(localStorage.getItem("signin")).signin.usuario }
      
    } )
      .then(response => response.json())
      .then(data => this.setState(
        {
          id: data.id,
          nome: data.nome,
        }));
  }

  atualizarAluno(aluno) {
    fetch('https://react-api-bff.herokuapp.com/api/procedimentos/' + aluno.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json',
      "token":JSON.parse(localStorage.getItem("signin")).signin.token,
      "usuario_id": JSON.parse(localStorage.getItem("signin")).signin.usuario,
     },
      body: JSON.stringify(aluno)
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarAlunos();
        this.fecharModal();
      } else {
        alert(JSON.stringify(resposta));
      }
    });
  }

  atualizaNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  abrirModalInserir() {
    this.setState({
      modalAberta: true
    })
  }

  abrirModalAtualizar(id) {
    this.setState({
      id: id,
      modalAberta: true
    });

    this.buscarAluno(id);
  }

  fecharModal() {
    this.setState({
      id: 0,
      nome: "",
      modalAberta: false
    })
  }

  submit = () => {
    const aluno = {
      id: this.state.id,
      nome: this.state.nome,
    };

    if (this.state.id === 0) {
      this.inserirAluno(aluno);
    } else {
      this.atualizarAluno(aluno);
    }
  }

  renderTeste(){
    <div>
      <Button variant="primary" form="modalForm" type="submit">
            Confirmar
      </Button>
      </div>
  }
  renderModal() {
    return (
      <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados do Procedimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="modalForm" onSubmit={this.submit}>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control type='text' placeholder='Nome do Procedimento' value={this.state.nome} onChange={this.atualizaNome} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.fecharModal}>
            Cancelar
      </Button>
          <Button variant="primary" form="modalForm" type="submit">
            Confirmar
      </Button>
        </Modal.Footer>
      </Modal>
    );
  }


  renderTabela() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Opções</th>
           
          </tr>
        </thead>
        <tbody>
          {this.state.alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>
                
            <Button variant="link" onClick={() => this.abrirModalAtualizar(aluno.id)}>Atualizar</Button>
            <Button variant="link" onClick={() => this.abrirModalAtualizar(aluno.id)}>Ficha Avaliativa</Button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      
     <C.Container>   
      <C.Content>
        <C.Teste>
          <div> Label para pesquisar</div>
          <div> Botao</div>
        </C.Teste>
        {this.renderTabela()}
        {this.renderModal()}
        </C.Content>
    </C.Container>
    );
  }
}