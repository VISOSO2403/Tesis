import {createStackNavigator} from '@react-navigation/stack';
import {
  CreateUserScreen,
  ForgetPassScreen,
  LoginGoogleScreen,
  LoginScreen,
  TermsScreen,
} from '../screens';
import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {UserDrawerNav} from './UserDrawerNav';

const Stack = createStackNavigator();

export const AuthStackNav = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    auth().onAuthStateChanged(activeUser => {
      setUser(activeUser);
      if (initializing) {
        setInitializing(false);
      }
    });
  }, [initializing]);

  if (initializing) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      {user ? (
        <>
          <Stack.Screen name="UserDrawerNav" component={UserDrawerNav} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginGoogle" component={LoginGoogleScreen} />
          <Stack.Screen name="LoginEmail" component={LoginScreen} />
          <Stack.Screen name="CreateUser" component={CreateUserScreen} />
          <Stack.Screen name="Forget" component={ForgetPassScreen} />
          <Stack.Screen name="Terms" component={TermsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
