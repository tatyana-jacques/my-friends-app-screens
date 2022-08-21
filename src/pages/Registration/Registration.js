import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, Switch, View, Image, TouchableOpacity } from "react-native"
import { commonStyles } from "../../styles/CommonStyles"
import eye from "../../../assets/eye.png"

export default function Registration() {
    function navigateToEmail() {
        navigation.navigate("Login")

    }
    return (

        <SafeAreaView style={{ ...commonStyles.container, alignItems: "flex-start" }}>
            <StatusBar backgroundColor={"#1c3354ff"} />

            <Text style={{ ...commonStyles.text, fontSize: 40 }}>Get Started</Text>

            <View style={{ ...commonStyles.signIn, marginLeft: 0 }}>
                <Text style={{ color: "#1c3354ff" }} >Alredy have an account? </Text>
                <TouchableOpacity onPress={navigateToEmail} >

                    <Text style={commonStyles.signInText}>Sign In.</Text>
                </TouchableOpacity>
            </View>



            <Text style={commonStyles.littleText} >Full Name</Text>

            <TextInput
                style={{ ...commonStyles.input, padding: 5, }}
                selectionColor={"#1c3354ff"}
                maxLength = {50}

            />


            <Text style={commonStyles.littleText} >E-mail</Text>

            <TextInput
                style={{ ...commonStyles.input, padding: 5, }}
                selectionColor={"#1c3354ff"}
                keyboardType={"email-address"}

            />

            <Text style={commonStyles.littleText}>Password</Text>

            <View
                style={commonStyles.input}

            >

                <TextInput
                    style={{ ...commonStyles.littleText, width: "80%" }}
                    selectionColor={"#1c3354ff"}
                    secureTextEntry />

                <TouchableOpacity>
                    <Image source={eye} style={{ ...commonStyles.littleImage, opacity: 0.5, }} />
                </TouchableOpacity>
            </View>

            <Text style={commonStyles.littleText}> Account Type</Text>
           
            <View style = {styles.accountType} >
                <TouchableOpacity style={styles.viewButton}>
                    <View style={styles.viewButtonInside}>
                    </View>
                </TouchableOpacity>
                <Text style = {commonStyles.littleText}> Student   </Text>

                <TouchableOpacity style={styles.viewButton}>
                   
                </TouchableOpacity>
                <Text style = {commonStyles.littleText}> Teacher  </Text>
            </View>


            <TouchableOpacity style={{ ...commonStyles.button, alignSelf: "center" }} >
                <Text style={commonStyles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ ...commonStyles.signIn, marginLeft: 0 }}>
                <Text style={{ color: "#1c3354ff" }} >By Sign up you agree to our  </Text>
                <TouchableOpacity onPress={navigateToEmail} >

                    <Text style={commonStyles.privacyText}>Privacy Policy.</Text>
                </TouchableOpacity>
                <Text style={{ color: "#1c3354ff" }} > and  </Text>
                <TouchableOpacity onPress={navigateToEmail} >

                    <Text style={commonStyles.privacyText}>Terms and Conditions.</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    accountType: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",


    },

    viewButton: {
        width: 18,
        height: 18, 
        borderColor: "#1c3354ff", 
        borderRadius: 50,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    viewButtonInside: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: "#1c3354ff",
    }

})


