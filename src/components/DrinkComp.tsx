import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'


interface IdrinkButton{
  drinkSearch:()=>void 
}
 
 

const Drinkbutton= ({drinkSearch}:IdrinkButton) =>{

    return(
      <View style={styles.background}>

        <TouchableOpacity onPress={drinkSearch}>
  
        <Image source={require("../assets/icons/drinkstart.png")}/>
 
        </TouchableOpacity>
    
      </View>
  
    )
}
  export default Drinkbutton

  const styles = StyleSheet.create({
    background:{
      backgroundColor:'white',
      padding:20,
      borderRadius:5,
      

    }

  })