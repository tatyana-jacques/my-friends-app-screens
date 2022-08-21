import { StatusBar, SafeAreaView, StyleSheet, Text, TextInput, Switch, View, Image, TouchableOpacity } from "react-native"
import { commonStyles } from "../../styles/CommonStyles"
import eye from "../../../assets/eye.png"

export default function Login() {
    
  
    return (
       
        <SafeAreaView style={{ ...commonStyles.container, alignItems: "flex-start" }}>
            <StatusBar backgroundColor={"#1c3354ff"}/>
           

            <Text style={commonStyles.text}>Login</Text>

            <Text style = { commonStyles.littleText} >E-mail</Text>
            
            <TextInput
                style={{...commonStyles.input, padding: 5,}}
                selectionColor = {"#1c3354ff"}
               
            />

            <Text style = { commonStyles.littleText}>Password</Text>
            <View 
            style={commonStyles.input}
             >
                <TextInput 
                style = {{width: "80%"}}
                selectionColor = {"#1c3354ff"}
                secureTextEntry
                />
                
                <TouchableOpacity>
                    <Image source={eye} style={{ ...commonStyles.littleImage, opacity: 0.5, }} />
                </TouchableOpacity>
            </View>


            <View style={styles.switchContainer}>
                <Text style = { commonStyles.littleText}> Remember me</Text>
                <Switch
                    value={false}
                    thumbColor={"#1c3354ff"}
                    trackColor={{ true: "#1c3354ff", false: "#CACACA" }} />
            </View>

            <TouchableOpacity style={{...commonStyles.button, alignSelf: "center"}} >
                    <Text style={commonStyles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{alignSelf: "center"}}>
                    <Text style={commonStyles.littleText}>Forget password? </Text>
                </TouchableOpacity>
                

        </SafeAreaView>
     
    )
}

const styles = StyleSheet.create({

    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    
})