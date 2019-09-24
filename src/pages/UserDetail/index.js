import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {Container, Input, Form, Title, Button, ButtonText} from './styles';

import api from '../../services/api';

export default class UserDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    user: '',
    id: '',
    newName: '',
    newEmail: '',
    newCpf: '',
    bank_account: [],
  };

  componentDidMount() {
    const {navigation} = this.props;

    const user = navigation.getParam('user');

    this.setState({
      id: user.id,
      newName: user.name,
      newCpf: user.cpf,
      newEmail: user.email,
    });
  }

  handleEditUser = async () => {
    const {id, newName, newCpf, newEmail} = this.state;

    const data = {
      name: newName,
      cpf: newCpf,
      email: newEmail,
    };

    const response = await api
      .put(`/users/${id}`, data)
      .then(function(response) {
        Alert.alert('Alterado', 'usuário foi alterado');
      })
      .catch(function() {
        Alert.alert('OPS', 'Preencha todos os campos');
      });
  };

  render() {
    const {user, newName, newCpf, newEmail, bank_account} = this.state;

    return (
      <>
        <Container>
          <Form>
            <Input
              placeholder="Nome"
              value={newName}
              onChangeText={text => this.setState({newName: text})}
              ref={input => {
                this.textInput = input;
              }}
            />
          </Form>
          <Form>
            <Input
              placeholder="CPF"
              value={newCpf}
              onChangeText={text => this.setState({newCpf: text})}
            />
          </Form>
          <Form>
            <Input
              placeholder="E-mail"
              value={newEmail}
              onChangeText={email => this.setState({newEmail: email})}
            />
          </Form>
        </Container>
        <Container>
          <Title>Informações da conta</Title>
          <Form>
            <Input placeholder="Agencia" />
          </Form>
          <Form>
            <Input placeholder="Conta" />
          </Form>
        </Container>
        <Button onPress={this.handleEditUser}>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </>
    );
  }
}
