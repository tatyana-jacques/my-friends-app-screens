import {SafeAreaView, StyleSheet, Text} from "react-native"

export default function Login (){
    return(
    <SafeAreaView style = {styles.container}>
       
        <Text>Login</Text>
        
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center"
    },

    text: {
        color: "#1c3354ff",
},

})