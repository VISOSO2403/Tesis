import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginGoogleScreen,
  LoginScreen,
  SigninScreen,
  TermsScreen,
} from '../screens';

const Stack = createStackNavigator();

export const AuthStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen name="LoginGoogle" component={LoginGoogleScreen} />
      <Stack.Screen name="LoginEmail" component={LoginScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
    </Stack.Navigator>
  );
};
