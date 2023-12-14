
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import Burgerbutton from "./components/BurgerComp";
import Main from "./components/Component-container"
import Drinkbutton from "./components/DrinkComp";
import Menubutton from "./components/FetchComp";
import Soupbutton from "./components/SoupComp";
import { API_URL, DRINK_API, LOKK_URL } from "./constants";
import MealCard from "./Mealscard";
import { Meal } from "./types/meals.type";
import { Soup } from "./types/soup.type";

function Details (){
  const [meals, setMeals] = useState <Meal[]>([])


  const handleSearch = async () => {
    const responce = await fetch(API_URL + 'chicken');
    const result = await responce.json();
    console.log('data',result)
    setMeals(result['meals']);
  };

  const soupSearch = async () => {
    const responce = await fetch(API_URL + 'soup');
    const result = await responce.json();
    console.log('data',result)
    setMeals(result['meals']);
  };

  const burgerSearch = async () => {
    const responce = await fetch(API_URL + 'cheese');
    const result = await responce.json();
    console.log('data',result)
    setMeals(result['meals']);
  }

    const drinkSearch = async () => {
      const responce = await fetch(DRINK_API + 'cocktail');
      const result = await responce.json();
      console.log('data',result)
      setMeals(result['drinks']);
    }



  return (
    <SafeAreaView style={styles.area}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style= {styles.header}>
        <Image source={require("./assets/icons/Menu.png")}/>
        <View style={{flexDirection:"row"}}>
        <Image style={{marginRight:24}} source={require("./assets/icons/search.png")}/>
        <Image source={require("./assets/icons/Shopping.png")}/>
        </View>
      </View>
      {/* <View style={styles.menu}>
        <Text style ={styles.menuText}> DELICIOUS FOOD</Text>
        <Text style={styles.menuText2}> AT YOUR DOOR STEPS</Text>
      </View> */}
      <Main/>
      <View style={styles.icon}>
        <Menubutton handleSearch={handleSearch}/>
        {/* <Image style={{borderWidth:5,borderColor:"black"}} source={require("./assets/icons/Allfood.png")}/> */}
        <Soupbutton soupSearch={soupSearch}/>
        {/* <Image source={require("./assets/icons/Rice.png")}/> */}
        <Burgerbutton burgerSearch={burgerSearch}/>
        {/* <Image source={require("./assets/icons/fast.png")}/> */}
        <Drinkbutton drinkSearch={drinkSearch}/>
        {/* <Image source={require("./assets/icons/drinkstart.png")}/> */}
      </View>
      {/* < View style={styles.image}>
        <Image source={require("./assets/images/Rice.png")}/>
        <Image source={require("./assets/images/Zinger.png")}/>
      </View> */}
      <View style={styles.Text}>
        <Text style={styles.Text1}>Popular</Text>
        <Text style={styles.Text2}>Now</Text>
      </View>
      

      {meals?.map((item,index)=>{
        const mealId = item.idMeal || item.idDrink
        const name = item.strMeal || item.strDrink
        const imageUrl = item.strMealThumb || item.strDrinkThumb
        return (
          <MealCard key={index} mealID={mealId!} name={name!} imageUrl={imageUrl!}/>
        )
      })}
      {/* <View style={styles.footer} >
        <Image style={{marginHorizontal:8,marginVertical:5}} source={require("./assets/images/Rectangle.png")}/>
        <View style={styles.footerText}>
        <Text style={styles.footText1}>Chicken Manchurian</Text>
        <Text>Chinese Cuisine</Text>
        <View style={styles.footicon1}>
        <Text style={styles.footText2}>$110.50</Text>
        <Image style={styles.footicon} source={require("./assets/icons/Vector.png")}/>
        </View>
        </View>
      </View> */}
      </ScrollView>
     
    </SafeAreaView>
  )
}
export default Details
const styles = StyleSheet.create({

  area: {
    flex:1,
  },
  header:{
    flexDirection: "row",
    marginHorizontal: 46 ,
    margin: 46,
    alignItems: "center",
    justifyContent:"space-between",

  },
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
  icon:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:20,
    margin:45,
  },
  image:{
    flexDirection:"row",
    marginLeft:20,
    justifyContent:"space-between",
    borderRadius:24,
  },
  Text1:{
    fontSize:25,
    fontWeight:"bold",
    color:"black",
    marginRight:10
  },
  Text2:{
    fontSize:25,
  },
  Text:{
    flexDirection:"row",
    alignItems:"center",
    marginLeft:18,
    marginTop:27,
  },
  footer:{
    marginTop:27,
    flexDirection:"row",
    marginHorizontal:20,
    borderWidth:3,
    borderColor:"black",
    borderRadius:12
  },
  footerText:{
    marginLeft:16
  },
  footText1:{
    fontSize:18,
    color:"black",
    fontWeight:"bold"
  },
  footText2:{
    marginTop:14,
    fontSize:20,
    color:"black",
    fontWeight:"600",
  },
  footicon:{
    backgroundColor:"#4E5156",
    borderRadius:8,
    padding:15,
    marginLeft:118,
    marginBottom:24,
  },
  footicon1:{
    flexDirection:"row",
  },
})
