import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Header from './Header';
import Body from './Body';

export default function Home(props) {
  function goToTasks() {
    props.navigation.navigate('Tasks');
  }

  return (
    <View style={styles.container}>
      <Header data={'Welcome!'} />
      <Body data={'You are in Task App'} />
      <Image style={styles.image} source={require('../assets/check.gif')} />
      <Pressable style={styles.button} onPress={goToTasks}>
        <Text style={styles.button.text}>TASKS</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'sans-serif, Roboto',
    backgroundColor: '#F5F7C3',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 10,
  },
  button: {
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 24,
    },
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#000',
    marginTop: 15,
  },
});
