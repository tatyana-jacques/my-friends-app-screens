import {SafeAreaView, StyleSheet, Image} from "react-native"
import logo from "../../../assets/logo.png"

export default function Home (){
    return(
    <SafeAreaView style = {styles.container}>
       
        <Image source={logo} style={styles.logoImage} />
        
    </SafeAreaView>
    )
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
   
   
    logoImage: {
    width: 120,
    height: 120,
    marginBotton: 50,

   } 
    
    
})