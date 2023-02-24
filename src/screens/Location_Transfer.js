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
  Modal,
  Button,
  Alert,
} from 'react-native';
import CardView from 'react-native-cardview';
import styles from '../style/styles';
import i18n from '../constant/i18n';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OutlineInput from 'react-native-outline-input';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Checkbox, DataTable, Paragraph, Card, Title } from 'react-native-paper';
import { setDefaults } from 'react-i18next';

export default class LocationTransfer extends Component {
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
      Barcode_Value: '',
      checked: '',
      visible: false,
      hideDialog: true,
      modalVisible: false,
      modalVisible1: false,


    };
  }


  onClickListener = () => {
    this.setState({ modalVisible: true })
  };

  close_model = () => {
    this.setState({ modalVisible: false, modalVisible1: false })
  };
  yes_btn = () => {
    console.log("Yes btn close")
    this.setState({ modalVisible1: true })
  };



  pagechange() {
    console.log('onchange page ');
    // this.props.navigation.navigate('Poapproval')
    this.props.navigation.navigate('Poapproval', {
      flag: true,
    });
  }

  _renderIcon = (routeName, selectTab) => {3
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
      this.setState({ type: 'up' });
      this.RBSheet.open();
    }
  };

  renderTabBar = ({ routeName, selectedTab, navigate }) => {
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
   
    if (values.data != null) {
      var count = values.data;
      console.log('count', count);
    } else {
      var count = 0;
    }
    console.log('values', this.props);
    return (

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ justifyContent: 'center', alignContent:'center' ,alignSelf:'center',alignItems:'center' ,marginTop: '60%', margin: '5%' }}>
            <Text> kaushal </Text>

            <TouchableOpacity activeOpacity={.1} key={1} >
              <CardView
                cornerRadius={15}
                style={styles.model_card}>
                <Text style={[styles.textCard, { marginBottom: 30 }]}>
                  Are you sure ?
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                  <TouchableHighlight
                    style={[styles.model_buttonContainer]}
                    onPress={() => this.yes_btn()}>
                    <Text style={styles.transfer_Text}>Yes</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[styles.model_buttonContainer]}
                    onPress={() => this.close_model()}>
                    <Text style={styles.transfer_Text}>No</Text>
                  </TouchableHighlight>

                </View>
              </CardView>
            </TouchableOpacity>

          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible1}
          onRequestClose={() => {
            setModalVisible(!modalVisible1);
          
          }}
        >
          <View style={{justifyContent: 'center', alignContent:'center' ,alignSelf:'center',alignItems:'center' ,marginTop: '60%', margin: '5%' }}>
            <Text> kaushal </Text>

            <TouchableOpacity activeOpacity={.1} key={1} >
              <CardView
                cornerRadius={15}
                style={styles.model_card}>

                <Text style={[styles.textCard, { marginBottom: 30 }]}>
                  Transferred successfully !
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>

                  <TouchableHighlight
                    style={[styles.model_buttonContainer]}
                    onPress={() => this.close_model()}>
                    <Text style={styles.transfer_Text}>Ok</Text>
                  </TouchableHighlight>

                </View>
              </CardView>
            </TouchableOpacity>


          </View>
        </Modal>
        <View style={{ backgroundColor: '#FFFF', height: '100%' }}>
          <SafeAreaView>
            <View style={{ marginBottom: 10 }}>
              <View style={[styles.transfer_card, { backgroundColor: '#0000', }]} >
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <View style={{ marginTop:  0, marginBottom: 10  }}>

                    <OutlineInput
                      value={this.state.Primary_Quantity}
                      height={40}
                      onChangeText={(e) => this.setState({ Primary_Quantity: e })}
                      label="Enter Item Code"
                      activeValueColor="#1d4355"
                      activeBorderColor="#365b6d"
                      activeLabelColor="#537789"
                      passiveBorderColor="#b2b2b2"
                      passiveLabelColor="#b2b2b2"
                      passiveValueColor="#1d4355"
                    />
                  </View>
                </View>
                
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',marginBottom: 10 }}>
                  <View style={{ width: "75%", marginTop: 0, paddingLeft: 10, }}>
                    <OutlineInput
                      value={this.state.Barcode_Value}
                      height={40}
                      onChangeText={(e) => this.setState({ Barcode_Value: e })}
                      label="From Location "
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
              <View
                style={{
                  borderBottomColor: '#365b6d',
                  borderBottomWidth: 1,
                }}
              />
              <ScrollView horizontal={false} style={{ height: '64%', backgroundColor: '#FAFAFA' }} shouldIndicatorHide={false}
                scrollEventThrottle={5}>
                <View
                  style={{ marginTop: '4%', paddingLeft: 0, paddingRight: 15, marginTop: 20, marginBottom: 10 }}>
                  <View style={{}}>

                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                      }}>
                        
                        {/* <View style={styles.verticleLine}></View> */}
                      <DataTable  style={{marginLeft:7}}>
                        <DataTable.Header style={{ backgroundColor: '#0F2A37', }}>
                          <DataTable.Title ><Checkbox
                            // color={'red'}
                            uncheckedColor='white'
                            status={this.state.checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                              this.setState({ checked: !this.state.checked });
                            }}
                          /></DataTable.Title>
                          <DataTable.Title  style={{flex:2,alignSelf:'center'}}><Text style={{ color: '#ffff', }}>Item Number</Text></DataTable.Title>
                          <DataTable.Title numeric> <View style={styles.verticleLine_white} /><Text style={{color: '#ffff',  }}> Qty </Text></DataTable.Title>
                          <DataTable.Title numeric> <Text style={{ color: '#ffff' }}> UOM </Text></DataTable.Title>
                          <DataTable.Title numeric> <Text style={{ color: '#ffff' }}> Lot No. </Text></DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                          <DataTable.Cell ><Checkbox
                            status={this.state.checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                              this.setState({ checked: !this.state.checked });
                            }}
                          /></DataTable.Cell>
                          <DataTable.Cell  style={{flex:2}}>Item 2 </DataTable.Cell>
                          <DataTable.Cell numeric >5</DataTable.Cell>
                          <DataTable.Cell numeric>KG</DataTable.Cell>
                          <DataTable.Cell numeric>45A</DataTable.Cell>
                        </DataTable.Row>

                      </DataTable>
                    </View>
                  </View>

                </View>

              </ScrollView>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  borderBottomColor: '#365b6d',
                  borderBottomWidth: 1,
                }}
              />

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <View style={{ width: "75%", marginTop: 0, paddingLeft: 10 }}>
                    <OutlineInput
                      value={this.state.Barcode_Value}
                      height={40}
                      onChangeText={(e) => this.setState({ Barcode_Value: e })}
                      label="To Location"
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

            <View
              style={{
                borderBottomColor: '#365b6d',
                borderBottomWidth: 1,
              }}
            />
            <View style={{ padding: 7, height: '13%', backgroundColor: '#0F2A37' }}>
              <TouchableHighlight
                style={[styles.transfer_buttonContainer]}
                onPress={() => this.onClickListener()}>
                <Text style={styles.transfer_Text}>Transfer</Text>
              </TouchableHighlight>
            </View>

          </SafeAreaView> 
        </View>

      </View>

    );
  }
}
