import { View, StyleSheet, Image } from "react-native"
import { Text } from "react-native-paper"

export const HomeScreen = () => {

    return (
        <View style={style.container}>

            <Text style={style.texto1}> Sou a tela SIIIIIII</Text>

            <Image
                style={style.imagem}
                source={{
                    uri: "https://veja.abril.com.br/wp-content/uploads/2016/10/cristianohaters.jpg?quality=70&strip=info&w=1000&h=667&crop=1",
                }}
            />

               
              
        </View>)
}

const style = StyleSheet.create({

    texto1: {
        color: 'white',
        textAlign: 'center',
        fontSize: '20px',
        marginTop: '20px'
    },

   

    container: {
        backgroundColor: 'black',
        display: 'flex',
        marginTop: '90px',
        marginLeft: '20px',
        marginRight: '20px',
        

    },
    imagem: {
        width: '20px',
        height:'20px',
    },

})