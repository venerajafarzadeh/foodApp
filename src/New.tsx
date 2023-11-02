import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity,} from "react-native"
function New (){
    const [hansisaName,setName] = useState("Zehra")
    
    
    
    const click = ()=>{
        const name = hansisaName === "Zehra" ? "Venera": "Zehra"
        setName(name)
    }



    return(
        <SafeAreaView style={styles.main}>
            <Text style={styles.name}> {hansisaName}</Text>
            <TouchableOpacity style={styles.button} onPress={click}>
                <Text style={styles.buttext}> Click</Text>
             </TouchableOpacity>
            
           
        </SafeAreaView>
    )
    
}


export default New
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    button:{
        width:"60%",
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        height: 50,
        borderRadius:8,

        
    },
    name:{
        backgroundColor:"#7cfc00",
        marginVertical:12,
        padding:15,
    },
    buttext:{
        color:"white"
    }
   


})
   