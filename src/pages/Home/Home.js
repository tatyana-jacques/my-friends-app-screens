import { SafeAreaView, StyleSheet, Image, TouchableOpacity, Text, View } from "react-native"
import logo from "../../../assets/logo.png"
import { commonStyles } from "../../styles/CommonStyles"
import googleLogo from "../../../assets/google.png"


export default function Home({ navigation }) {
    function navigateToGoogle() {
        navigation.navigate("Google")

    }
    function navigateToEmail() {
        navigation.navigate("Login")

    }

    function navigateToRegistration() {
        navigation.navigate("Registration")

    }
    return (
        <SafeAreaView style={commonStyles.container}>
            

            <Image source={logo} style={styles.logoImage} />

            <View>
                <TouchableOpacity style={commonStyles.button} onPress={navigateToGoogle}>
                    <Image source={googleLogo} style={commonStyles.littleImage} />
                    <Text style={commonStyles.buttonText}>Sign Up With Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...commonStyles.button, backgroundColor: "white" }} onPress={navigateToEmail}>
                    <Text style={{ ...commonStyles.buttonText, color: "#1c3354ff" }}>Sign Up With Email</Text>
                </TouchableOpacity>

                <View style={styles.signIn}>
                    <Text style={{color: "#1c3354ff"}} >Alredy have an account? </Text>
                    <TouchableOpacity onPress={navigateToRegistration} >

                        <Text  style = {styles.signInText}>Sign In.</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({


    logoImage: {
        width: 120,
        height: 120,
        margin: 30,
    },

    

    signIn: {

        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        margin: 10,
        fontSize: 24,

    },

    signInText: {
        textDecorationLine: "underline",
        color: "#F23838"
    },



})