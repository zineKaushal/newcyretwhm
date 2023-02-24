import * as React from 'react';
import {
  Text,
  View,
  Alert,
  Animated,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
import styles from '../style/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
    };
  }

  componentDidMount = () => {
    // this.fetchInfo();
  };

  fetchInfo = async () => {
    let user = await AsyncStorage.getItem('userName');
    let email = await AsyncStorage.getItem('userEmail');
    this.setState({userName: user});
    this.setState({userEmail: email});
  };

  render() {
    return (
      <View style={styles.container_home}>
        <View style={[styles.Profilehome_card_heder]}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              marginBottom:-20,
              marginTop:20            }}>
            {/* <Text style={({marginBottom: 15, marginTop: 60, backgroundColor: 'black'}, [styles.text])}> */}
            <Text style={styles.ProfilePagehome_card_hedertext}>
              My Profile
            </Text>
            <Image
              source={require('../images/cyret-logo-white.png')}
              resizeMode="contain"
              style={{width: 95, height: 90, marginLeft: 30, margin: 13}}
            />
          </View>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 2,
              marginLeft: '10%',
              marginRight: '10%',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              marginTop: '5%',
            }}>
            <View style={{justifyContent: 'center', textAlign: 'center'}}>
              <Text
                style={[
                  styles.ProfilePagename,
                  {fontWeight: 'bold', fontSize: 23},
                ]}>
                {this.state.userName ? this.state.userName : ' '}
              </Text>
              <Text style={styles.ProfilePagename}>
                {this.state.userEmail
                  ? this.state.userEmail
                  : ''}
              </Text>
              <Text style={styles.ProfilePagename}> India </Text>
            </View>
            <Image
              style={styles.ProfilePageavatar}
              source={require('../images/user_avatar.png')}
            />
          </View>
        </View>

        <View style={styles.ProfilePagebody}>
          <View style={styles.ProfilePageitem}>
            <View style={styles.ProfilePageiconContent}>
              <Image
                style={styles.ProfilePageicon}
                source={{
                  uri: 'https://img.icons8.com/color/70/000000/cottage.png',
                }}
              />
            </View>
            <View style={styles.ProfilePageinfoContent}>
              <Text style={styles.ProfilePageinfo}>Home</Text>
            </View>
          </View>

          <View style={styles.ProfilePageitem}>
            <View style={styles.ProfilePageiconContent}>
              <Image
                style={styles.ProfilePageicon}
                source={{
                  uri: 'https://img.icons8.com/color/70/000000/administrator-male.png',
                }}
              />
            </View>
            <View style={styles.ProfilePageinfoContent}>
              <Text style={styles.ProfilePageinfo}>Settings</Text>
            </View>
          </View>

          <View style={styles.ProfilePageitem}>
            <View style={styles.ProfilePageiconContent}>
              <Image
                style={styles.ProfilePageicon}
                source={{
                  uri: 'https://img.icons8.com/color/70/000000/facebook-like.png',
                }}
              />
            </View>
            <View style={styles.ProfilePageinfoContent}>
              <Text style={styles.ProfilePageinfo}>Placeholder1</Text>
            </View>
          </View>

          <View style={styles.ProfilePageitem}>
            <View style={styles.ProfilePageiconContent}>
              <Image
                style={styles.ProfilePageicon}
                source={{
                  uri: 'https://img.icons8.com/color/48/000000/analytics.png',
                }}
              />
            </View>
            <View style={styles.ProfilePageinfoContent}>
              <Text style={styles.ProfilePageinfo}>Placeholder2</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();

              this.props.navigation.navigate('Login');
            }}>
            <View style={styles.ProfilePageitem}>
              <View style={styles.ProfilePageiconContent}>
                <Image
                  style={styles.ProfilePageicon}
                  source={{
                    uri: 'https://img.icons8.com/external-filled-agus-raharjo/64/000000/external-logout-social-media-filled-agus-raharjo.png',
                  }}
                />
              </View>
              <View style={styles.ProfilePageinfoContent}>
                <Text style={styles.ProfilePageinfo}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
