import {StyleSheet} from "react-native"

export const commonStyles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: 20,
       
    },
    button: {
        height: 50,
        width: "70%",
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#1c3354ff",
        margin: 10,
        padding: 10,
        flexDirection: "row",
        shadowColor: "#1c3354ff",
        elevation: 10,

       
        
    },

    buttonText: {
        color: "#FFF",
        fonstSize: 14,
        textAlign: "center",
       
    },

    input: {
        width: "100%",
        fontSize: 20,
        borderStyle: "solid",
        backgroundColor: "#CACACA",
        borderRadius: 10,
        color: "#1c3354ff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
       
    },
    littleImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
       

    },
   
})