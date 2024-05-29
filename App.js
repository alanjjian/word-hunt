import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native';

const PlaceholderImage = require('./assets/background-image.png');

const Tile = ({letter}) => {
  return (
    <View>
      <Pressable style={styles.pressable}>
        <Text style={styles.pressableText}> {letter} </Text>
      </Pressable>
    </View>
  );
};

const Board = ({letters}) => {
  const listLetters = letters.map(letter => <Tile letter={letter} />)
  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      {listLetters}
    </View>
  )
}

export default function App() {
  const letters = "ABCDEFG".split('')
  return (
    <SafeAreaView style={styles.container}>
      <Board letters={letters}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    backgroundColor: '#147EFB', 
    padding: 10, 
    borderRadius: 4
  },
  pressableText: {

  }
});