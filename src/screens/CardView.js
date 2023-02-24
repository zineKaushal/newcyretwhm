import React, { Component } from 'react';
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
import { useTranslation } from 'react-i18next';
import i18n from '../constant/i18n';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FlatListBasics from '../screens/PO_approval_list_view';
const cardGap = 20;

const cardWidth = 158;

export default class CardViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.setState({i18n:useTranslation()})
    // console.log("t =",this.state.t)
  }
  locationtransfer() {
    // this.props.navigation.navigate('Poapproval')
    this.props.navigation.navigate('\Location_Transfer', {
      flag: true,
    });
  }

  pagechange = (e) => {
    console.log('e', e)
    if (e == 1) {
      this.props.navigation.navigate('\Pallet_Transfer', {
        flag: true,
      });
    }
    else if (e == 2) {
      this.props.navigation.navigate('\Location_Transfer', {
        flag: true,
      });
    }
    else if (e == 3) {
      this.props.navigation.navigate('\Location_Transfer', {
        flag: true,
      });
    }
    else if (e == 4) {
      this.props.navigation.navigate('', {
        flag: true,
      });
    }
    else if (e == 5) {
      this.props.navigation.navigate('\Pick_List', {
        flag: true,
      });
    }
    else{
      this.props.navigation.navigate('', {
        flag: true,
      });
    }
    // this.props.navigation.navigate('Poapproval')

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
          <View style={{ marginBottom: 20 }}>
            <View style={styles.home_card_heder}>

              <Text style={[styles.home_card_hedertext, { marginLeft: 10 }]}>
                Warehouse Operations
              </Text>
              {/* <Image
                  source={require('../images/cyret-logo-white.png')}
                  resizeMode="contain"
                  style={{width: 85, height: 80, marginTop: 20}}
                /> */}
            </View>

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity activeOpacity={.1} key={1} onPress={() => this.pagechange(1)}>
                <CardView
                  //1
                  cornerRadius={15}
                  style={styles.home_card}>
                  <Image
                    source={require('../images/DashboardIcons/ProducedPalletTransfer.png')}
                    resizeMode="contain"
                    style={{ width: 90, height: 90, marginBottom: 10 }}
                  />
                  <Text style={[styles.textCard, { marginBottom: 10 }]}>
                    {i18n.t('Produced Pallet Transfer')}
                  </Text>
                </CardView>
              </TouchableOpacity>
              <TouchableOpacity key={2} onPress={() => this.pagechange(2)} activeOpacity={.1}>
                <CardView
                  //2
                  cardElevation={10}
                  cardMaxElevation={1}
                  cornerRadius={15}
                  style={styles.home_card}>
                  <Image
                    source={require('../images/DashboardIcons/LocationTransfer.png')}
                    resizeMode="contain"
                    style={{ width: 90, height: 90, marginBottom: 10 }}
                  />
                  <Text style={[styles.textCard, { marginBottom: 10 }]}>
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
              <TouchableOpacity key={3} onPress={() => this.pagechange(3)} activeOpacity={.1}>
                <CardView
                  //3
                  cardElevation={1}
                  cardMaxElevation={1}
                  cornerRadius={15}
                  style={styles.home_card}
                >
                  <Image
                    source={require('../images/DashboardIcons/RawMaterialreceive.png')}
                    resizeMode="contain"
                    style={{ width: 90, height: 90, marginBottom: 10 }}
                  />
                  <Text style={[styles.textCard, { marginBottom: 10 }]}>
                    {i18n.t('Raw Material Receive')}
                  </Text>
                </CardView>
              </TouchableOpacity>
              <TouchableOpacity key={4} onPress={() => this.pagechange(4)} activeOpacity={.1}>
                <CardView
                  //4
                  cardElevation={1}
                  cardMaxElevation={1}
                  cornerRadius={15}
                  style={styles.home_card}
                >
                  <Image
                    source={require('../images/DashboardIcons/TradingFGReceive.png')}
                    resizeMode="contain"
                    style={{ width: 90, height: 90, marginBottom: 10 }}
                  />
                  <Text style={[styles.textCard, { marginBottom: 10 }]}>
                    {i18n.t('Trading FG Receive')}
                  </Text>
                </CardView>
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity key={5} onPress={() => this.pagechange(5)} activeOpacity={.1}>
                <CardView
                  //5
                  cardElevation={10}
                  cardMaxElevation={1}
                  cornerRadius={15}
                  style={styles.home_card}>
                  <Image
                    source={require('../images/DashboardIcons/PickConfirmation.png')}
                    resizeMode="contain"
                    style={{ width: 90, height: 90, marginBottom: 10 }}
                  />
                  <Text style={[styles.textCard, { marginBottom: 10 }]}>
                    {i18n.t('Pick Confirmation')}
                  </Text>
                </CardView>
              </TouchableOpacity>
              <TouchableOpacity key={6} onPress={() => this.pagechange(6)} activeOpacity={.1}>
                <CardView
                  //6
                  cardElevation={10}
                  cardMaxElevation={1}
                  cornerRadius={15}
                  style={styles.home_card}>
                  <Image
                    source={require('../images/DashboardIcons/Shipconfirmation.png')}
                    resizeMode="contain"
                    style={{ width: 90, height: 90, marginBottom: 10 }}
                  />
                  <Text style={[styles.textCard, { marginBottom: 10 }]}>
                    {i18n.t('Ship Confirmation')}
                  </Text>
                </CardView>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
