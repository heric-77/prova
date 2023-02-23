import { View, StyleSheet, Image } from "react-native"
import { Text } from "react-native-paper"

export const HomeScreen = () => {

    return (
        <View style={style.container}> 
            <Image
                style={style.imagem}
                source={{
                    uri: "https://veja.abril.com.br/wp-content/uploads/2016/10/cristianohaters.jpg?quality=70&strip=info&w=1000&h=667&crop=1",
                }}
                />
                <Text style={style.texto1}>  SIIIIIIIIIIIIIIIII</Text>  
             </View>)
}

const style = StyleSheet.create({

    texto1: {
       
        color: 'black',
        textAlign: 'center',
        fontSize: '40px',
        marginTop: '70px'
    },

   

    container: {
        display: 'flex',
        marginTop: '90px',
        marginLeft: '20px',
        marginRight: '20px',
        alignItems: 'center'
        

    },
    imagem: {
        width: '490px',
        height:'490px',        
    },

})