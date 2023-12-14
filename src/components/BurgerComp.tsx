import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

interface IburgerButton{
    burgerSearch:()=>void 
  }
   
   
  
  const Burgerbutton= ({burgerSearch}:IburgerButton) =>{
  
      return(
        <View style={styles.background2}>
  
          <TouchableOpacity onPress={burgerSearch}>
    
          <Image source={require("../assets/icons/fast.png")}/>
          </TouchableOpacity>
      
        </View>
    
      )
  }
    export default Burgerbutton
  
    const styles = StyleSheet.create({
      background2:{
        backgroundColor:'white',
        padding:20,
        borderRadius:5,
        
  
      }
  
    })
  
  