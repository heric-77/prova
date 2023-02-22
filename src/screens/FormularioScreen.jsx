import { Text, View, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";


export default function Formulario() {


    return (

        <View style={style.container}>
            <Text style={style.texto}>Calculadora de IMC</Text>

            <TextInput
                label={'Nome Completo'}
                style={style.input}
            />

            <TextInput
                label={'Data de nascimento'}
                style={style.input}
            />

            <TextInput
                label={'Peso(kg)'}
                style={style.input}
                
            />
            
            <TextInput
                label={'Altura(M)'}
                style={style.input}
            />
            
            <Text style={style.info}> Preencha todos os campos para dar certo! </Text>

            <Button label='calcular'
                style={{ marginTop: 15, width: 200, marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black' }}
                icon='send'
                mode='contained'
            >calcular</Button>



            <Text style={style.Result}> Seu Resultado:</Text>
            <TextInput disabled style={style.Resultinput} />

            <Image
                source={{
                    uri: "https://picsum.photos/300/300",
                }}
            />

        </View>



    )
}

const style = StyleSheet.create({

    texto: {
        textAlign: 'center',
        color: 'black',
        marginTop: '50px',
        fontSize: '30px'
    },

    input: {
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',

    },

    Result: {
        marginTop: '30px',
        marginRight: '100px',
        marginLeft: '100px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px'
    },

    Resultinput: {
        display: 'flex',
        width: '150px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    container: {
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    info: {
        fontSize: '15px',
        marginTop: '10px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        alignItems: "center",
        height: '40px',

    }
})