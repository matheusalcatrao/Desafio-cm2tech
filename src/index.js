import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffcb08" />
      <Routes />
    </>
  );
}
