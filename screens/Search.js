import React, { useState }from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
const Search = ({navigation}) => {
  const [text, onChangeText] = useState('Rechercher un Film')
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput 
          style={styles.input}
          placeholder={'Recherche Film ou serie'}
          onChangeText={onChangeText}
          value={text}
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth:.5,
    height: 50,
    padding: 8
  },
  container: {
    padding: 10,
    paddingTop: 60,
  }
})
export default Search;