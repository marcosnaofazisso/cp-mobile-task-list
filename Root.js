import { createStackNavigator } from "@react-navigation/stack";
import Tasks from "./screen/Tasks,js";
import Home from "./screen/Home.js";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tasks" component={Tasks} />
    </Stack.Navigator>
  );
}
