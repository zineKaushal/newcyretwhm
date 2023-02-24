//import liraries
import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styles';
import {useNavigation} from '@react-navigation/native';
import ProjectURL from '../constant/constant';

// create a component
export class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {},
      error: null,
      isProcessing: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../images/CyretFullLogo.png')}
        />
        <Text style={styles.titleText}>ForgotPassword </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="User ID"
            placeholderTextColor="grey"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{padding: 30}}>
            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableHighlight>
          </View>
          <View style={{padding: 30}}>
            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.onClickListener()}>
              <Text style={styles.loginText}>Reset Password</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default ForgotPassword;
