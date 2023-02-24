import * as React from 'react';
import {
  Text,
  View,
  // TextInput,
  TouchableHighlight,
  Image,
  Alert,
  BackHandler,
  LogBox,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styles';
import {useNavigation} from '@react-navigation/native';
import ProjectURL from '../constant/constant';
import {Icon} from 'react-native-elements';
import OutlineInput from 'react-native-outline-input';
import {TextInput} from 'react-native-paper';

let backPressed = 0;

LogBox.ignoreLogs(['Warning:  Possible Unhandled Promise Rejection (id: 0)']);
LogBox.ignoreAllLogs();

const cardWidth = 158;

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'cyrnitishm',
      password: 'pune@123',
      error: '',
      isFocusedLogin: false,
      isFocusedPassword: false,
    };
  }

  componentDidMount = () => {
    this.clearallData();

    console.log('login page called and all data cleared');
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  };


    // this.setState
//     const [name,setNAMe] = React.useEffect();
// 
//     setNAMe('ajinkya')


    
  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      if (backPressed == 0) {
        BackHandler.exitApp();
      }
    }
  };

  icon = () => {
    let icon = '';
    icon = 'lock-closed';
    return icon;
  };

  clearallData = async () => {
    let user_id = await AsyncStorage.getItem('userToken');
    await AsyncStorage.removeItem(key);
    if (user_id != null) {
      const keys = await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => alert('Storage cleared successfully'));
    } else {
      const keys = await AsyncStorage.getAllKeys().then(keys =>
        AsyncStorage.multiRemove(keys),
      );
      console.log('No storage found');
    }
  };

  onClickListener = props => {
    const {email, password} = this.state;

    if (email == '') {
      Alert.alert('Username should not be blank');
    } else if (password == '') {
      Alert.alert('Password should not be blank');
    } else {
      this.setState({error: null});
      this.props.navigation.navigate('Home', {
              screen: 'Home',
              params: {alphaName: 'Ajinkya Joshi'},
            });
      // fetch(ProjectURL + `/jderest/v2/tokenrequest`, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: 'cyrnitishm',//email,
      //     password: 'pune@123'//password,
      //   }),
      // })
      //   .then(response => response.json())
      //   .then(response => {
      //     console.log('defaultApp -> data', response);
      //     AsyncStorage.clear();
      //     AsyncStorage.setItem('userToken', response.userInfo.token);
      //     AsyncStorage.setItem('userName', response.userInfo.alphaName);
      //     AsyncStorage.setItem('userEmail', response.username);
      //     this.props.navigation.navigate('Home', {
      //       screen: 'Home',
      //       params: {alphaName: response.userInfo.alphaName},
      //     });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     Alert.alert('Enter valid Username and Password');
      //   });
    }
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={[styles.item]}>
          <Image
            style={styles.image}
            source={require('../images/cyret-logo-white.png')}
          />
          <Text style={styles.loginText}>Welcome</Text>
          <Text style={styles.loginText1}>Sign in to continue</Text>
        </View>
        <View style={[styles.item1, {paddingTop: 12}]}>
        <Text style={styles.loginText2}>Enter User ID & Password</Text>
          <View style={{width:'100%',paddingLeft:30,paddingRight:30,paddingTop:10}}>
            <OutlineInput
              height={80}
              label="User ID"
              // fontSize={}
              activeValueColor="#1d4355"
              activeBorderColor="#1d4355"
              activeLabelColor="#1d4355"
              passiveBorderColor="#b2b2b2"
              passiveLabelColor="#b2b2b2"
              passiveValueColor="#1d4355"
              value={'cyrnitishm'}
              onChangeText={email => this.setState({email})}
              />
            {/* <TextInput
            mode='outlined'
            label='User ID'
            // style={{color:'green'}}
            // backgroundColor="black" 
            activeOutlineColor='red' 
            outlineColor='green'
            placeholderTextColor="orange"
            style={{height:40}}
            right={<TextInput.Icon name=''/>}
            placeholder='abc'/> */}

          </View>

          <View style={{width:'100%',paddingLeft:30,paddingRight:30,paddingTop:20,paddingBottom:30}}>
          <OutlineInput
              height={40}
              label="Password"
              activeValueColor="#1d4355"
              activeBorderColor="#1d4355"
              activeLabelColor="#1d4355"
              passiveBorderColor="#b2b2b2"
              passiveLabelColor="#b2b2b2"
              secureTextEntry={true}
              passiveValueColor="#1d4355"
              value={'pune@123'}
              onChangeText={password => this.setState({password})}
              />
            
          </View>
          <View>
            <TouchableHighlight
              style={[styles.buttonContainer]}
              onPress={() => this.onClickListener()}>
              <Text style={styles.loginText3}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableHighlight>

            <Image
              style={styles.image1}
              source={require('../images/CyretFullLogo.png')}
            />
          </View>
        </View>
      </View>

     
    );
  }
}

export default Login;
