import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import api from '../../services/api';
import PropTypes from 'prop-types';

import {
  Container,
  List,
  Button,
  ButtonText,
  User,
  Name,
  Account,
  ButtonAdd,
  ButtonAddText,
  ButtonDelete,
} from './styles';

export default class UserList extends Component {
  static navigationOptions = {
    title: 'Lista de Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    users: [],
    actions: [],
  };

  async componentDidMount() {
    const response = await api.get('/users');

    const data = response.data['hydra:member'];

    this.setState({users: data});
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  handlerNavigation = user => {
    const {navigation} = this.props;

    navigation.navigate('UserDetail', {user});
  };

  handlerDeleteUser = async user => {
    const {id, name} = user;

    const response = api.delete(`/users/${id}`);

    Alert.alert('Deletado', `usuário ${name} foi deletado`);
  };

  handlerNewUser = () => {
    const {navigation} = this.props;
    navigation.navigate('NewUser');
  };

  render() {
    const {users, actions} = this.state;
    return (
      <Container>
        <List
          data={users}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <>
              <User>
                <Name>{item.name}</Name>
                <Account>{item.cpf}</Account>
                <Button onPress={() => this.handlerNavigation(item)}>
                  <ButtonText>Editar</ButtonText>
                </Button>
                <ButtonDelete onPress={() => this.handlerDeleteUser(item)}>
                  <ButtonText>Excluir</ButtonText>
                </ButtonDelete>
              </User>
            </>
          )}
        />
        <FloatingAction onPressMain={() => this.handlerNewUser()} />
      </Container>
    );
  }
}
