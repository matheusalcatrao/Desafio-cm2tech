import React, {Component} from 'react';
import {View, Alert} from 'react-native';

import {Container, Form, Input, Button, ButtonText} from '../../globalStyles';

import api from '../../services/api';
import {func} from 'prop-types';

export default class NewUser extends Component {
  static navigationOptions = () => ({
    title: 'Novo Usuário',
  });

  state = {
    newName: '',
    newCpf: '',
    newEmail: '',
  };

  handleEditUser = async () => {
    const {newName, newCpf, newEmail} = this.state;

    const data = {
      name: newName,
      cpf: newCpf,
      email: newEmail,
    };

    const response = await api
      .post('/users', data)
      .then(function(response) {
        Alert.alert('Cadastrado', `usuário ${newName} foi cadastrado`);
      })
      .catch(function() {
        Alert.alert('OPS', 'Preencha todos os campos');
      });
  };

  render() {
    return (
      <>
        <Container>
          <Form>
            <Input
              placeholder="Nome"
              onChangeText={text => this.setState({newName: text})}
            />
          </Form>
          <Form>
            <Input
              placeholder="CPF"
              onChangeText={text => this.setState({newCpf: text})}
            />
          </Form>
          <Form>
            <Input
              placeholder="E-mail"
              onChangeText={email => this.setState({newEmail: email})}
            />
          </Form>
        </Container>
        <Button onPress={this.handleEditUser}>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </>
    );
  }
}
