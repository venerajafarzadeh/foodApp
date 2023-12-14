import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'


interface ImenuButton{
  handleSearch:()=>void 
}
 
 

const Menubutton= ({handleSearch}:ImenuButton) =>{

    return(
      <View style={styles.background}>

        <TouchableOpacity onPress={handleSearch}>
  
  <Image style={{backgroundColor:'white', padding:15}} source={require("../assets/icons/menustart.png")}/>
        </TouchableOpacity>
    
      </View>
  
    )
}
  export default Menubutton

  const styles = StyleSheet.create({
    background:{
      backgroundColor:'white',
      padding:20,
      borderRadius:5,
      

    }

  })



  