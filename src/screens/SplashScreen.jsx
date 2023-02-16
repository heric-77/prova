import { Button } from "react-native-paper"

export const SplashScreen = ({navigate}) => {

    

    return (
        <View>
            <Text>Eu sou a tela de Splash!! 🎆🎆</Text>
            <Button onPress={(navigate)=>navigate.navigate("HomeScreen")}></Button>
        </View>
    )
}