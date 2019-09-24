import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';
import {View} from 'react-native';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import NewUser from './pages/NewUser';

const Routes = createAppContainer(
  createStackNavigator(
    {
      UserList,
      UserDetail,
      NewUser,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#ffcb08',
        },
        headerTintColor: '#333',
      },
    },
  ),
);

export default Routes;
