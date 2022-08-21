import {SafeAreaView, Image, StyleSheet} from "react-native"
import googleLogo from "../../../assets/google.png"
import { commonStyles } from "../../styles/CommonStyles"


export default function Google (){
    return(
    <SafeAreaView style = {commonStyles.container}>
       
       <Image source={googleLogo} style={styles.googleImage} />
        
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({


    googleImage: {
        width: "80%",
        height: "80%",
       
    },

})