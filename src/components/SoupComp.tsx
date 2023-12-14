import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

interface IsoupButton{
    soupSearch:()=>void 
  }

  const Soupbutton= ({soupSearch}:IsoupButton) =>{

    return(
      <View style={styles.background1}>

        <TouchableOpacity onPress={soupSearch}>
  
         <Image source={require("../assets/icons/Ricebowl.png")}/>
        </TouchableOpacity>
    
      </View>
  
    )
}
  export default Soupbutton
  const styles = StyleSheet.create({
    background1:{
      backgroundColor:'#4E5156',
      padding:20,
      borderRadius:5,
      

    }

  })