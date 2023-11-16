import React, { useEffect, useState } from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const TextInputExample = () => {

   const [input, setInput] = useState("");
  //  useEffect(() => {
  //    if ( input === ""){
  //      setTimeout(() => {
  //       Alert.alert('Venera',input)
         
  //      },1000);

  //   }
// },[input]);
    
 const onPressOkButton  = (()=>{
  setTimeout(()=>{

  },1000 );
}




   const onChangeText =(data:string)=>{
    console.log("data",data)
   }

  return (
    <SafeAreaView style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>setInput(text)}
        value={input}
      />

      <View>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text> OK</Text>
        </TouchableOpacity>
    

      </View>
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height:40,
    margin:30,
    borderWidth: 1,
    padding: 10,
    justifyContent:"flex-end",
    alignItems:"center",
    width:"74%",
    

  },
  main:{
    flex:1,
    justifyContent:"flex-end",
  },
  button:{

  }
});

export default TextInputExample;