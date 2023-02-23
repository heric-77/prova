import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button,  Checkbox,  TextInput } from "react-native-paper";


export default function Formulario() {
        const [isSelected, setSelection] = useState(false);
        
        return (
            
            <View style={style.container}>
            <Text style={style.titulo}>Formulario Pessoal</Text>
    
            <TextInput
                label={'Nome Completo'}
                style={style.input}
                />
             <TextInput
                label={'Email'}
                style={style.input}
                />

            <TextInput
                label={'Data de nascimento'}
                style={style.input}
                />
             <TextInput
                label={'CPF'}
                style={style.input}
                />
             <TextInput
                label={'RG'}
                style={style.input}
                />
             <TextInput
                label={'Numero de Whatsapp'}
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

            <Text style={style.info}> Preencha todos os campos  e aperte no botão para Enviar </Text>


        <View style={style.checkboxContainer}>        
            <Checkbox
                value={isSelected}
                onValueChange={setSelection}    
            />
        <Text style={style.textinho}>Concordo com os termos de privacidade</Text>
        </View>
        
        <Button label='Enviar'
            style={{ marginTop: 15, width: 200, marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black' }}
            icon='send'
            mode='contained'>Enviar</Button>
        </View>



            )
    };


    

const style = StyleSheet.create({

    titulo: {
        textAlign: 'center',
        color: 'black',
        marginTop: '50px',
        fontSize: '30px'
    },
    textinho:{
        fontSize:'20px',
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

    },
    imagem: {
        width: '90px',
        height:'90px',        
        justifyContent: 'center',
    },
    checkboxContainer:{
     flexDirection: 'row',
    marginBottom: 20,
    },

    
})