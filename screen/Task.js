import { StyleSheet, Text, View, Image } from 'react-native';

export default function Task(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data}</Text>
      <Image
        style={styles.removeImage}
        source={require('../assets/trash.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F7C3',
  },
  text: {
    color: '#000',
    fontFamily: 'sans-serif, Roboto',
    fontSize: 20,
    marginRight: 10,
  },
  removeImage: {
    flex: 2,
    width: 15,
    height: 15,
  },
});
