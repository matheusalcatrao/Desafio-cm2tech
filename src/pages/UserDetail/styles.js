import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 5px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Form = styled.View`
  margin-top: 15px;
  padding: 0 15px;
  height: 46px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 25px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1px;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const Title = styled.Text`
  padding: 5px;
  font-size: 22px;
  color: #333;
  font-weight: bold;
  justify-content: center;
  text-align: center;
`;
export const Button = styled(RectButton)`
  align-self: stretch;
  background: #ffcb08;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.loading ? 0.7 : 1)};
  padding: 15px;
  height: 36px;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
`;
