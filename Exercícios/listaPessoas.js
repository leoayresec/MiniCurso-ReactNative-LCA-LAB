import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pessoas: [
        {
          nome: { primeiroNome: 'Leonardo', segundoNome: 'Ayres' },
          idade: 23,
          sexo: 'Masculino',
          contato: { telefone: '91988544751', email: 'l.ay@gmail.com' },
        },
        {
          nome: { primeiroNome: 'Lucas', segundoNome: 'Amador' },
          idade: 25,
          sexo: 'Masculino',
          contato: { telefone: '91982447588', email: 'amador.l@gmail.com' },
        },
        {
          nome: { primeiroNome: 'Silvana', segundoNome: 'Souza' },
          idade: 23,
          sexo: 'Feminino',
          contato: { telefone: '9188745241', email: 'kkdy@gmail.com' },
        },
        {
          nome: { primeiroNome: 'Maria', segundoNome: 'Luiza' },
          idade: 25,
          sexo: 'Feminino',
          contato: { telefone: '545444', email: 'sdssl@gmail.com' },
        },
        {
          nome: { primeiroNome: 'Rodrigo', segundoNome: 'Santos' },
          idade: 23,
          sexo: 'Masculino',
          contato: { telefone: '9198744522', email: 'R.ss@gmail.com' },
        },
        {
          nome: { primeiroNome: 'Rafael', segundoNome: 'Calouro' },
          idade: 25,
          sexo: 'Masculino',
          contato: { telefone: '516164555', email: 'dsdsaaaasl@gmail.com' },
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.pessoas}
          renderItem={({ item }) => (
            <Text>
              {item.nome.primeiroNome +
                ' ' +
                item.nome.segundoNome +
                ', ' +
                item.idade +
                ' ' +
                item.contato.telefone +
                ' ' +
                item.contato.email}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
