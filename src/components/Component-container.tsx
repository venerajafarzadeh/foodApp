import React from "react";
import { StyleSheet, Text, View,  } from 'react-native'

const  Main = props =>{
    return (
        <View style={styles.menu}>
        <Text style ={styles.menuText}> DELICIOUS FOOD</Text>
        <Text style={styles.menuText2}> AT YOUR DOOR STEPS</Text>
      </View>

    )

    }

export default Main
const styles = StyleSheet.create({
    menu:{
        marginTop:40,
        marginLeft:26
      },
      menuText:{
        fontSize: 32,
        fontWeight: "bold",
        color:"black"
      },
      menuText2:{
        fontSize:20,
        fontWeight:"500"
      },
})