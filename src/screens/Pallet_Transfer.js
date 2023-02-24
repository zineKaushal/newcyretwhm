import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  ScrollViewBackgroundLayer,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import CardView from 'react-native-cardview';
import styles from '../style/styles';
import i18n from '../constant/i18n';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OutlineInput from 'react-native-outline-input';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

export default class PalletTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCar: 'Volvo',
      email: '',
      setEmail: '',
      flag: false,
      type: 'up',
      flag1: false,
      Primary_Quantity: '',
      Weight_Quantity: '',
      From_Location: '',
      To_Location: '',
      Lot_Number: '',

    };
  }

  onClickListener() {
    console.log('Btn selected');
  }

  pagechange() {
    console.log('onchange page ');
    // this.props.navigation.navigate('Poapproval')
    this.props.navigation.navigate('Poapproval', {
      flag: true,
    });
  }

  _renderIcon = (routeName, selectTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'md-home';
        break;
      case 'Location_Transfer':
        icon = 'bar-chart-outline';
        break;
      case 'Setting':
        icon = 'md-settings';
        break;
      case 'Profile':
        icon = 'md-person';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={23}
        color={routeName === selectTab ? '#ff5821' : '#fff'}
      />
    );
  };
  

  selectedDropDown = value => {
    this.setState({ flag: true })
  };

  selectedDropDown1 = value => {
    this.setState({ flag1: true })
  };

  onClickButton = () => {
    if (this.state.type === 'up') {
      this.props.navigation.navigate('Home');
    } else {
      this.setState({type: 'up'});
      this.RBSheet.open();
    }
  };

  renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {this._renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };


  render() {
    const values = this.props;
    const countries = ['UOM', 'GM', 'CM', 'M'];
    // const [email, setEmail] = useState('');


    if (values.data != null) {
      var count = values.data;
      console.log('count', count);
    } else {
      var count = 0;
    }
    console.log('values', this.props);
    return (
      <View>
      <View style={{ backgroundColor: '#fff', height: '100%' }}>
        <SafeAreaView>
        {/* <View style={styles.home_card_heder}>

<Text style={[styles.home_card_hedertext, { marginLeft: 10 }]}>
  Produce Pallet Transfer
</Text>
</View> */}
            
            <View style={{marginTop: 10, marginBottom: 10}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <View style={{ width: "75%", backgroundColor: '#FAFAFA' ,paddingLeft:10}}>
                    <OutlineInput
                      value={this.state.Primary_Quantity}
                      height={40}

                      onChangeText={(e) => this.setState({ Primary_Quantity: e })}
                      label="Barcode Value"
                      // fontSize={}
                      activeValueColor="#1d4355"
                      activeBorderColor="#365b6d"
                      activeLabelColor="#537789"
                      passiveBorderColor="#b2b2b2"
                      passiveLabelColor="#b2b2b2"
                      passiveValueColor="#1d4355"
                    />
                  </View>
                  <View style={styles.verticleLine}></View>
                  <View style={{ alignSelf: 'center',paddingRight: 15 }}>
                    <Image
                      source={require('../images/qr-code-scan.png')}
                      resizeMode="contain"
                      style={{ width: 35, height: 35, marginTop: 0 }}
                    />
                  </View>
                </View>
                <View style={{paddingLeft: 10, paddingRight: 10 }}>
                <View style={{  marginTop: 10, marginBottom: 10 }}>
                    
                  </View>
                </View>
              <View
                style={{
                  borderBottomColor: '#365b6d',
                  borderBottomWidth: 1,
                  marginLeft: '3%',
                  marginRight: '3%',
                }}
              />
               <ScrollView horizontal={false} style={{height:'80%',backgroundColor:'#FAFAFA'}} shouldIndicatorHide={false}
    scrollEventThrottle={5 }>
                <View
                  style={{ marginTop: '4%', paddingLeft: 10, paddingRight: 15, marginTop: 20, marginBottom: 10 }}>
                  <View style={{}}>

                    {/* <Text style={[styles.lt_text]}></Text> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        // justifyContent: 'space-between',
                      }}>
                      <View style={{ width: "65%", backgroundColor: '#FAFAFA' }}>
                        <OutlineInput
                          value={this.state.Primary_Quantity}
                          height={40}

                          onChangeText={(e) => this.setState({ Primary_Quantity: e })}
                          label="Primary Quantity"
                          // fontSize={}
                          activeValueColor="#1d4355"
                          activeBorderColor="#365b6d"
                          activeLabelColor="#537789"
                          passiveBorderColor="#b2b2b2"
                          passiveLabelColor="#b2b2b2"
                          passiveValueColor="#1d4355"
                        />
                      </View>

                      <SelectDropdown
                        data={countries}
                        // style={{height:'10%',width:5}}
                        defaultButtonText={"Select UOM"}
                        renderDropdownIcon={isOpened => {
                          return (
                            <Ionicons
                              name={isOpened ? 'chevron-up' : 'chevron-down'}
                              color={'#444'}
                              size={18}
                            />
                          );
                        }}
                        dropdownIconPosition={'right'}
                        buttonStyle={this.state.flag ? {
                          height: 40,
                          width: '35%',
                          backgroundColor: '#FFF',
                          borderColor: '#b2b2b2',
                          borderWidth: 1,
                          borderRadius: 5,
                        } : {
                          height: 40,
                          width: '35%',
                          backgroundColor: '#FFF',
                          borderColor: '#b2b2b2',
                          borderWidth: 1,
                          borderRadius: 5,
                        }}
                        buttonTextStyle={this.state.flag ? { fontSize: 15, color: '#1d4355' } : { fontSize: 15, color: '#b2b2b2' }}
                        onSelect={(index) => {
                          this.selectedDropDown(index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                      />
                    </View>
                  </View>

                </View>

                <View style={{ paddingLeft: 10, paddingRight: 15, marginTop: 10, marginBottom: 10 }}>
                  <View style={{}}>
                    {/* <Text style={[styles.lt_text]}></Text> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                      }}>
                      <View style={{ width: "65%" }}>
                        <OutlineInput
                          value={this.state.Weight_Quantity}
                          height={40}

                          onChangeText={(e) => this.setState({ Weight_Quantity: e })}
                          label="Weight Quantity"

                          // fontSize={}
                          activeValueColor="#1d4355"
                          activeBorderColor="#365b6d"
                          activeLabelColor="#537789"
                          passiveBorderColor="#b2b2b2"
                          passiveLabelColor="#b2b2b2"
                          passiveValueColor="#1d4355"
                        />
                      </View>
                      <SelectDropdown
                        data={countries}

                        defaultButtonText={"Select UOM"}
                        buttonTextStyle={this.state.flag1 ? { fontSize: 15, color: '#1d4355' } : { fontSize: 15, color: '#b2b2b2' }}
                        renderDropdownIcon={isOpened => {
                          return (
                            <Ionicons
                              name={isOpened ? 'chevron-up' : 'chevron-down'}
                              color={'#444'}
                              size={18}
                            />
                          );
                        }}
                        dropdownIconPosition={'right'}
                        buttonStyle={this.state.flag1 ? {
                          height: 40,
                          width: '35%',
                          backgroundColor: '#FFF',
                          borderColor: '#b2b2b2',
                          borderWidth: 1,
                          borderRadius: 5,
                        } : {
                          height: 40,
                          width: '35%',
                          backgroundColor: '#FFF',
                          borderColor: '#b2b2b2',
                          borderWidth: 1,
                          borderRadius: 5,
                        }}
                        // dropdownStyle={{marginBottom:10}}
                        onSelect={index => {
                          this.selectedDropDown1(index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                      />
                    </View>
                  </View>

                </View>
                
                
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <View style={{ width: "75%", backgroundColor: '#FAFAFA', paddingLeft: 10 }}>
                      <OutlineInput
                        value={this.state.Primary_Quantity}
                        height={40}

                        onChangeText={(e) => this.setState({ Primary_Quantity: e })}
                        label="To Location"
                        // fontSize={}
                        activeValueColor="#1d4355"
                        activeBorderColor="#365b6d"
                        activeLabelColor="#537789"
                        passiveBorderColor="#b2b2b2"
                        passiveLabelColor="#b2b2b2"
                        passiveValueColor="#1d4355"
                      />
                    </View>
                    <View style={styles.verticleLine}></View>
                    <View style={{ alignSelf: 'center', paddingRight: 15 }}>
                      <Image
                        source={require('../images/qr-code-scan.png')}
                        resizeMode="contain"
                        style={{ width: 35, height: 35, marginTop: 0 }}
                      />
                    </View>
                  </View>
                </View>

                <View style={{ marginTop: 10, marginBottom: 10 }}>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <View style={{ width: "75%", backgroundColor: '#FAFAFA', paddingLeft: 10 }}>
                      <OutlineInput
                        value={this.state.Primary_Quantity}
                        height={40}

                        onChangeText={(e) => this.setState({ Primary_Quantity: e })}
                        label="To Lot"
                        // fontSize={}
                        activeValueColor="#1d4355"
                        activeBorderColor="#365b6d"
                        activeLabelColor="#537789"
                        passiveBorderColor="#b2b2b2"
                        passiveLabelColor="#b2b2b2"
                        passiveValueColor="#1d4355"
                      />
                    </View>
                    <View style={styles.verticleLine}></View>
                    <View style={{ alignSelf: 'center', paddingRight: 15 }}>
                      <Image
                        source={require('../images/qr-code-scan.png')}
                        resizeMode="contain"
                        style={{ width: 35, height: 35, marginTop: 0 }}
                      />
                    </View>
                  </View>
                </View>

                </ScrollView>
            </View>
            
          
          <View style={{ padding: 7,height: '13%' ,backgroundColor:'#0F2A37',}}>
                <TouchableHighlight
                  style={[styles.transfer_buttonContainer]}
                  onPress={() => this.onClickListener()}>
                  <Text style={styles.transfer_Text}>Transfer</Text>
                </TouchableHighlight>
          </View>
          
        </SafeAreaView>
      </View>
      {/* <View style={{flex:1,justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          bottom: 0}}>
          <CurvedBottomBar.Navigator
          style={
            ([this.state.type == 'down'])
          }
          type={this.state.type}
          height={40}
          circleWidth={35}
          bgColor="#0F2A37"
          borderTopLeftRight={false}
          borderBottomLeftRight={false}
          initialRouteName=""
          swipeEnabled={false}
          renderCircle={({selectedTab, navigate}) => (
            <TouchableOpacity
              style={[
                this.state.type === 'down'
                  ? styles.btnCircle
                  : styles.btnCircleUp,
              ]}
              onPress={this.onClickButton}>
              <Image
                source={require('../images/cross.png')}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'transparent',
                }}
              />
            </TouchableOpacity>
          )}
          tabBar={this.renderTabBar}>
          <CurvedBottomBar.Screen
            name=""
            position="left"
            component={() => <View style={styles.container1}></View>}
          />
          <CurvedBottomBar.Screen
            name=""
            component={props => <View style={styles.container}></View>}
            position="left"
          />
          <CurvedBottomBar.Screen
            name=""
            component={() => <View style={styles.container}></View>}
            position="right"
          />
          <CurvedBottomBar.Screen
            name=""
            component={() => (
              <View style={{flex: 1, backgroundColor: '#204A6C'}}></View>
            )}
            position="right"
          />
        </CurvedBottomBar.Navigator>
        </View> */}
      </View>
    );
  }
}
