import { SafeAreaView, StyleSheet, Text, TextInput, Switch, View, Image, TouchableOpacity } from "react-native"
import { commonStyles } from "../../styles/CommonStyles"
import eye from "../../../assets/eye.png"

export default function Login() {
    

    
    return (
        <SafeAreaView style={{ ...commonStyles.container, alignItems: "flex-start" }}>

            <Text style={styles.text}>Login</Text>

            <Text style = { styles.littleText} >E-mail</Text>
            
            <TextInput
                style={{...commonStyles.input, padding: 5,}}
                selectionColor = {"#1c3354ff"}
               
            />

            <Text style = { styles.littleText}>Password</Text>

            <View 
            style={commonStyles.input}
           
             >

                <TextInput 
                style = { styles.littleText}
                selectionColor = {"#1c3354ff"}
                secureTextEntry/>
                
                <TouchableOpacity>
                    <Image source={eye} style={{ ...commonStyles.littleImage, opacity: 0.5, }} />
                </TouchableOpacity>
            </View>


            <View style={styles.switchContainer}>
                <Text style = { styles.littleText}> Remember me</Text>
                <Switch
                    value={false}
                    thumbColor={"#1c3354ff"}
                    trackColor={{ true: "#1c3354ff", false: "#CACACA" }} />
            </View>

            <TouchableOpacity style={{...commonStyles.button, alignSelf: "center"}} >
                    <Text style={commonStyles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{alignSelf: "center"}}>
                    <Text style={styles.littleText}>Forget password? </Text>
                </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


    text: {
        color: "#1c3354ff",
        fontSize: 50,
        paddingTop: 5,
        marginBottom: "10%",
      
       
    },

    littleText: {
        color: "#1c3354ff",
        fontSize: 20,
        marginTop: 5,

    },

    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    
})