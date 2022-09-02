import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Body(props) {
  return (
    <View>
      <Text style={styles.header}>{props.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#000',
    fontFamily: 'sans-serif, Roboto',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 50, 

  },
});
