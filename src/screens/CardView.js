import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import CardView from 'react-native-cardview';
import styles from '../style/styles';
import {useTranslation} from 'react-i18next';
import i18n from '../constant/i18n';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FlatListBasics from '../screens/PO_approval_list_view';
const cardGap = 20;

const cardWidth = 158;

export default class CardViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => { 
    // this.setState({i18n:useTranslation()})
    // console.log("t =",this.state.t)
    let user_id = await AsyncStorage.getItem('userToken');
    console.log(user_id)
  }
  pagechange() {
    console.log('onchange page ');
    // this.props.navigation.navigate('Poapproval')
    this.props.navigation.navigate('\Location_Transfer', {
      flag: true,
    })
  }

  render() {
    const values = this.props;
    if (values.data != null) {
      var count = values.data;
      console.log('count', count);
    } else {
      var count = 0;
    }
    console.log('values', this.props);
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView horizontal={false}>
          <View style={{marginBottom: 20}}>
            {/* <View style={styles.home_card_heder}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}>
                <Text style={styles.home_card_hedertext}>
                  Warehouse Operations
                </Text>
                <Image
                  source={require('../images/cyret-logo-white.png')}
                  resizeMode="contain"
                  style={{width: 85, height: 80, marginTop: 20}}
                />
              </View>
            </View> */}

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity >
                <CardView
                  //1
                  cornerRadius={15}
                  style={styles.home_card}>
                  <Image
                    source={require('../images/DashboardIcons/ProducedPalletTransfer.png')}
                    resizeMode="contain"
                    style={{width: 90, height: 90, marginBottom: 10}}
                  />
                  <Text style={[styles.textCard, {marginBottom: 10}]}>
                    {i18n.t('Produced Pallet Transfer')}
                  </Text>
                </CardView>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.pagechange()}>
              <CardView
                //2
                cardElevation={10}
                cardMaxElevation={1}
                cornerRadius={15}
                style={styles.home_card}>
                <Image
                  source={require('../images/DashboardIcons/LocationTransfer.png')}
                  resizeMode="contain"
                  style={{width: 90, height: 90, marginBottom: 10}}
                />
                <Text style={[styles.textCard, {marginBottom: 10}]}>
                  {i18n.t('Location Transfer')}
                </Text>
              </CardView>
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                // justifyContent: 'center',
              }}>
              <CardView
                //3
                cardElevation={1}
                cardMaxElevation={1}
                cornerRadius={15}
                style={styles.home_card}
                //   style={styles.card}
              >
                <TouchableOpacity onPress={()=>  this.props.navigation.navigate('cyclecount')}>
                <Image
                  // source={require('../images/approval.png')}
                  source={require('../images/DashboardIcons/RawMaterialreceive.png')}
                  resizeMode="contain"
                  style={{width: 90, height: 90, marginBottom: 10}}
                />
                <Text style={[styles.textCard, {marginBottom: 10}]}>
                  {i18n.t('Cycle Count')}
                </Text>
                </TouchableOpacity>
              </CardView>

              <CardView
                //4
                cardElevation={1}
                cardMaxElevation={1}
                cornerRadius={15}
                style={styles.home_card}
                //   style={styles.card}
              >
                <Image
                  // source={require('../images/approval.png')}
                  source={require('../images/DashboardIcons/TradingFGReceive.png')}
                  resizeMode="contain"
                  style={{width: 90, height: 90, marginBottom: 10}}
                />
                <Text style={[styles.textCard, {marginBottom: 10}]}>
                  {i18n.t('Trading FG Receive')}
                </Text>
              </CardView>
            </View>
            
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                // justifyContent: 'center',
              }}>
              <CardView
                //3
                cardElevation={1}
                cardMaxElevation={1}
                cornerRadius={15}
                style={styles.home_card}
                //   style={styles.card}
              >
                <Image
                  // source={require('../images/approval.png')}
                  source={require('../images/DashboardIcons/RawMaterialreceive.png')}
                  resizeMode="contain"
                  style={{width: 90, height: 90, marginBottom: 10}}
                />
                <Text style={[styles.textCard, {marginBottom: 10}]}>
                  {i18n.t('Raw Material Receive')}
                </Text>
              </CardView>

              <CardView
                //4
                cardElevation={1}
                cardMaxElevation={1}
                cornerRadius={15}
                style={styles.home_card}
                //   style={styles.card}
              >
                <Image
                  // source={require('../images/approval.png')}
                  source={require('../images/DashboardIcons/TradingFGReceive.png')}
                  resizeMode="contain"
                  style={{width: 90, height: 90, marginBottom: 10}}
                />
                <Text style={[styles.textCard, {marginBottom: 10}]}>
                  {i18n.t('Trading FG Receive')}
                </Text>
              </CardView>
            </View>

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                // justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => this.pagechange()}>
                <CardView
                  //5
                  cornerRadius={15}
                  style={styles.home_card}>
                  <Image
                    source={require('../images/DashboardIcons/PickConfirmation.png')}
                    resizeMode="contain"
                    style={{width: 90, height: 90, marginBottom: 10}}
                  />
                  <Text style={[styles.textCard, {marginBottom: 10}]}>
                    {i18n.t('Pick Confirmation')}
                  </Text>
                </CardView>
              </TouchableOpacity>

              <CardView
                //6
                cardElevation={1}
                cardMaxElevation={1}
                cornerRadius={15}
                style={styles.home_card}>
                <Image
                  source={require('../images/DashboardIcons/Shipconfirmation.png')}
                  resizeMode="contain"
                  style={{width: 90, height: 90, marginBottom: 10}}
                />
                <Text style={[styles.textCard, {marginBottom: 10}]}>
                  {i18n.t('Ship Confirmation')}
                </Text>
              </CardView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
