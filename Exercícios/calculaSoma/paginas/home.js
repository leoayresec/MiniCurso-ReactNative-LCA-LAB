import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';


// You can import from local files

// or any pure javascript modules available in npm

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero1: '',
            numero2: '',
            resultado: ''
        }
    }

    somar = () => {
        let { numero1, numero2 } = this.state;
        
        if (numero1 !== '' && numero2 !== '') {
            let resultado = parseFloat(numero1) + parseFloat(numero2)
            this.setState({ resultado });
            this.setState({numero1: '', numero2: ''});
            
        }
        

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerResultado}>
                    <Text style={styles.textResultado}>{this.state.resultado}</Text>
                </View>
                <TextInput placeholder='Digite um nome'
                    onChangeText={(texto) => this.setState({ numero1: texto })}
                    keyboardType='numeric'
                    value = {this.state.numero1}
                    style={styles.inputNumero}
                />
                <TextInput placeholder='Digite outro número'
                    onChangeText={(texto) => this.setState({ numero2: texto })}
                    keyboardType='numeric'
                    value = {this.state.numero2}
                    style={styles.inputNumero}
                />
                <TouchableOpacity
                    style={styles.buttomCalcular}
                    onPress={() => this.somar()}>
                    <Text style={styles.textButtomCalcular}>Calcular</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#e0ebeb',
        padding: 8,
    },
    containerResultado: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 50,
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        marginBottom: 10

    },
    inputNumero: {
        marginTop: 10,
        borderWidth: 1,
        width: 200,
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#eff5f5'


    },
    buttomCalcular: {
        backgroundColor: '#adc2eb',
        borderWidth: 1,
        padding: 5,
        marginVertical: 10
    },


    textButtomCalcular: {
        fontSize: 18,
    },
    textResultado: {
        fontSize: 26,

    }
});