import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

function Home(){
    const navigation=useNavigation()
    const gotoDetails =()=>{
        navigation.navigate('Details')

    }
    return(
        <SafeAreaView style={styles.area}>
            <ScrollView style={{flex:1}}>
            <View>
            <Text style={styles.text}>
            ENJOY FRIED RICE - THE BEST MEAL
            </Text>
            </View>
            
            <TouchableOpacity onPress={gotoDetails} style={styles.icon}>
            <Image source={require("./assets/icons/Group.png")}/>
            </TouchableOpacity>
            <Image source={require("./assets/images/Fried.png")}/>
            </ScrollView>
        </SafeAreaView>
        
    )
}
export default Home
 const styles = StyleSheet.create({
    area:{
        flex:1,
        backgroundColor:'white',
    },
    text:{
        fontSize:47,
        height:200,
        marginTop:110,
        marginLeft:18,
        color:'#333333',
        fontWeight:'bold',
    },
    icon:{
        marginRight:20,
        marginTop:23,
        alignSelf:'flex-end',

    },
 })