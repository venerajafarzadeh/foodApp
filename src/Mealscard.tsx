import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native'
interface ImealCard {
    name: string
    imageUrl: string
    mealID: string
}
function MealCard({ name, imageUrl, mealID }: ImealCard) {

    console.log("IMAGEURL=====>>>", imageUrl)
    return (
        <View style={styles.footer} >
            <Image style={{ marginHorizontal: 8, marginVertical: 5, width: 80, }} source={{ uri: imageUrl }} resizeMode={'cover'} />
            <View style={styles.footerText}>
                <Text style={styles.footText1}>{name}</Text>
                <View style={styles.footicon1}>
                    <Text style={styles.footText2}>{`MEAL ID: ${mealID}`}</Text>
                    <View>
                        <Image style={styles.footicon} source={require("./assets/icons/Vector.png")} resizeMode={'contain'} />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MealCard



const styles = StyleSheet.create({
    footer: {
        marginTop: 27,
        flexDirection: "row",
        marginHorizontal: 20,
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 12
    },
    footerText: {
        // marginLeft: 16
    },
    footText1: {
        fontSize: 16,
        width: 100,
        height: 40,
        color: "black",
        fontWeight: "bold"
    },
    footText2: {
        marginTop: 14,
        fontSize: 20,
        color: "black",
        fontWeight: "600",
    },
    footicon: {
        backgroundColor: "#4E5156",
        borderRadius: 8,
        padding: 15,
        marginBottom: 24,
    },
    footicon1: {
        flexDirection: "row",
        width: '80%',
        justifyContent: 'flex-end',

    },
})