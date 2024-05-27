import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const PlaceholderImage = require('./assets/background-image.png');

const Tile = ({letter}) => {
  return (
    <View>
      <Pressable style={{ backgroundColor: '#147EFB', padding: 10, borderRadius: 4 }}>
        <Text> {letter} </Text>
      </Pressable>
    </View>
  );
};

const Map = () => {

}

export default function App() {
  return (
    <View style={styles.container}>
      <Tile letter="X" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});