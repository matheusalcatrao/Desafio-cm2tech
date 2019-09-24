import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const User = styled.View`
  align-items: flex-start;
  padding-bottom: 20px;
  margin: 0 20px 30px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Account = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Button = styled(RectButton)`
  margin-top: 10px;
  align-self: flex-end;
  background: #ffcb08;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.loading ? 0.7 : 1)};
  padding: 5px;
  height: 36px;
  width: 100px;
  border-radius: 400px;
`;

export const ButtonDelete = styled(RectButton)`
  margin-top: 10px;
  align-self: flex-end;
  background: #ed6a5a;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.loading ? 0.7 : 1)};
  padding: 5px;
  height: 36px;
  width: 100px;
  border-radius: 400px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
`;
