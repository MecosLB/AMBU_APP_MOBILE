import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './src/components/LoginForm';
import { Montserrat_400Regular, Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layout from './src/layout/Layout';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Login'
            component={LoginForm}
          />
          <Stack.Screen
            name='Layout'
            component={Layout}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </>
  );
}