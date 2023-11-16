import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View }from 'react-native';
import React, { useState } from 'react';
const arrButtons = ['7','8','9','4','5','6','1','2','3','0'];
const arrOprators  =['+','-','*','/','=','AC'];
function Calc (){
    const [firstNumber, setFirtsNumber]= useState('');
    const [secondNumber, setSecondNumber]= useState('');
    const [operator, setOperator]= useState('');
    const [result, setResult]= useState('0');
    console.log('1',firstNumber);
    console.log('2',secondNumber);
    console.log('3',operator);

    const checkOperator = (a,b,opr)=>{
        switch (opr) {
            case '+':
                return +a + +b;
            case '-':
                return +a - +b;
            case '*':
                return +a * +b;
            case '/':
                return +a / +b; 
                
                               
            default:
                break;
        }
    }
    const numberPress = (num: string)=>{
        if (!secondNumber && !operator){
            setFirtsNumber(firstNumber + num);
            setResult(firstNumber + num);
        }else if (operator){
            setSecondNumber(secondNumber + num);
            setResult(secondNumber + num);
        }
    };
    const operatorPress = (opr: string)=>{
        console.log("onPressOperator=>",opr)
        if(opr ==='AC'){
            setResult('0');
            setFirtsNumber('');
            setSecondNumber('');
            setOperator('');
        }
        if(firstNumber && secondNumber){
            const oprResult = checkOperator(firstNumber,secondNumber,operator)
            setResult(oprResult);
            setFirtsNumber(oprResult);
            setSecondNumber('');
            setOperator('')
        }
        setOperator(opr)
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.action}>
            <View style={styles.actionArea}>
                <View style={styles.buttons}>
                    {arrButtons.map((item,index) =>{
                        return(
                            <TouchableOpacity 
                            key={index}
                            style={styles.button}
                            onPress={()=> numberPress(item)}>
                                <Text style={styles.buttonText}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}


                </View>
                <View style={styles.oprArea}>
                    {arrOprators.map((item,index)=>{
                        return (
                            <TouchableOpacity
                            key={index}
                            style={styles.oprButton}
                            onPress={()=> operatorPress(item)}>
                                <Text style={styles.buttonText}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                 </View>
                 </View>
        </SafeAreaView>
    )
                }

export default Calc;

    const styles= StyleSheet.create({
        container:{
            flex:1,
        },
        result:{
            height:'40%',
            backgroundColor:'black',
            alignItems:'flex-end',
            justifyContent:"flex-end"
         },
         resultText:{
            fontSize:52,
            color:'#ED0E98',
            fontWeight:'bold'
         },
         buttons:{
            backgroundColor:'#242424',
            flexDirection:'row',
            flexWrap:'wrap',
            width:'70%',
            justifyContent:'center'
         },
         button:{
            width:'30%',
            height:100,
            backgroundColor:'black',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
         },
         oprButton:{
            width:'70%',
            height:70,
            backgroundColor:'black',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
         },
         buttonText:{
            fontSize:40,
            color:'#ED0E98',
         },
         actionArea:{
            flexDirection:'row',
            width:'100%',
            justifyContent:"center",
            
            
            
            
         },
         oprArea:{
            width:'30%',
            alignItems:'center',
            
         },
         action:{
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor:'#242424'
         },
    });
