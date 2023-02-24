import * as React from 'react';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import POApproval from './src/screens/PO_approval_list_view';
import {LogBox, StatusBar} from 'react-native';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
// import OrderDetailsScreen from './src/screens/OrderDetails';
import POOrderDetails from './src/screens/PO_OrderDetails';
import SplashScreen from './src/screens/SplashScreen';
// import RbsheetScreen from './src/screens/Rbsheet';
import ForgotPassword from './src/screens/Forgotpassword';
import Location_Transfer from './src/screens/Location_Transfer';
import Pallet_Transfer from './src/screens/Pallet_Transfer';
import Pick_List from './src/screens/Pick_List';

LogBox.ignoreLogs(['Reanimated 2']);

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  componentDidMount() {}

  render() {
    return (
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light"
          networkActivityIndicatorVisible={true}
        />
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Poapproval"
            component={POApproval}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AuthLoading"
            component={AuthLoadingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="POOrderDetails"
            component={POOrderDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Location_Transfer"
            component={Location_Transfer}
            // options={{headerShown: true}}
            options={{
              title: 'Location Transfer',
              headerStyle: {
                backgroundColor: '#0F2A37',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen
            name="Pallet_Transfer"
            component={Pallet_Transfer}
            options={{
              title: 'Pallet Transfer',
              headerStyle: {
                backgroundColor: '#0F2A37',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen
            name="Pick_List"
            component={Pick_List}
            options={{
              title: 'Pick List',
              headerStyle: {
                backgroundColor: '#0F2A37',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
