import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Root";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
