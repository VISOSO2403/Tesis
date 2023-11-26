import {createStackNavigator} from '@react-navigation/stack';
import {
  CreateUserScreen,
  ForgetPassScreen,
  LoginGoogleScreen,
  LoginScreen,
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
      <Stack.Screen name="CreateUser" component={CreateUserScreen} />
      <Stack.Screen name="Forget" component={ForgetPassScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
    </Stack.Navigator>
  );
};
