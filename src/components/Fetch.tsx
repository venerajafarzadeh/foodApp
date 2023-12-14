import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

interface Movie {
  show: {
    id: number;
    name: string;
    summary: string;
    image: {
      medium: string;
      original: string;
    };
    rating: {
      average: number;
    };
  };
}

const API_URL = 'http://api.tvmaze.com/search/shows?q=';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = text => {
    setSearchValue(text);
  };

  const handleSearch = async () => {
    const responce = await fetch(API_URL + searchValue);
    const result = await responce.json();
    setMovies(result);
  };

  return (
    <ScrollView style={styles.main} contentContainerStyle={styles.container}>
      <TextInput
        style={styles.search}onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
      {movies.map(item => {
        return (
          <View key={item?.id}>
            <Text style={styles.text}>{item?.show?.name}</Text>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: item.show.image.medium}}
            />
            <Text style={styles.text}>{item?.show?.summary}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  main:{
    width:"100%",
    height:"100%",
    backgroundColor:"#f5f5dc",
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  search:{
    backgroundColor: '#d3d3d3',
    width: '90%',
    marginVertical: 10,
    borderRadius: 12,
  },
  button:{
    backgroundColor:"red",
    borderRadius: 18,
    height:50,
    width:60,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
  },
  text:{
    fontSize:15,
  }
});