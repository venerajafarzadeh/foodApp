import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View }from "react-native";


function Kalk(){
    const[input,setInput]=useState('')
    const[result,setResult]=useState('')


    const onButtonPress = (value) =>{
        if(value=== '='){
            try{
                setResult(eval(input))
            }catch(error){
                setResult('error')
            }
        }else if(value=== 'C'){
            setInput('')
            setResult('')
        }else{
            setInput(input+value)
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{result}</Text>

            </View>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.inputText}
                value={input}
                onChangeText={setInput}
                keyboardType='numeric'
                />
               

            </View>
            <View style={styles.buttonContainer}>
                    {['7','8','9','/','4','5','6','*','1','2','3','-','0','C','=','+'].map(
                        (item,index) => (
                            <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={()=> onButtonPress(item)}>
                                <Text style={styles.buttonText}>{item}</Text>
                                
                            </TouchableOpacity>
                        )
                        )}
                

                </View>


        </SafeAreaView>
    )
}
export default Kalk
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    resultContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'black'

    },
    resultText:{
        fontSize:40,
        color:'#ED0E98'
        

    },
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'black'


    },
    inputText:{
        fontSize:30,
        color:'#ED0E98'


    },
    buttonContainer:{
        flex:7,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#242424',
        
        


    },
    button:{
        fontSize:24,
        width:'25%',
        height:'20%',
        justifyContent:'center',
        alignItems:"center",
        borderWidth:1,
        borderColor:'#ED0E98',
        backgroundColor:'black',
        borderRadius:40
    },
    buttonText:{
        fontSize:24,
        color:'#ED0E98'
    },


    
})