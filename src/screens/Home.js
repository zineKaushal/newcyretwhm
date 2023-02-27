import * as React from 'react';
import {
  Text,
  View,
  Alert,
  Animated,
  TouchableOpacity,
  StatusBar,
  Image,
  BackHandler,
  LogBox,
  ScrollView,
} from 'react-native';
import styles from '../style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FlatListBasics from '../screens/PO_approval_list_view';
import Location_Transfer from './Location_Transfer';
// import Setting from '../screens/Setting';

import ProfilePage from '../screens/ProfilePage';
import CardViewPage from '../screens/CardView';
// import RbsheetComponent from '../screens/Rbsheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SocialIcon} from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';

let backPressed = 0;

LogBox.ignoreLogs([
  'Warning:  Each child in a list should have a unique "key" prop. ',
]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
export class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      type: 'down',
      routeName: '',
      selectTab: '',
      
    };
  }

  componentDidMount = () => {
    this.fetchInfo();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  };

  fetchInfo = async () => {
    let user = await AsyncStorage.getItem('userName');
    console.log('user', user);
    console.log('this.state.type',this.state.type)

    this.setState({userName: user});
  };

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      if (backPressed == 0) {
        BackHandler.exitApp();
      }
    }
  };

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
        color={routeName === selectTab ? '#E36612' : '#fff'}
      />
    );
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

  // onClickButton = ()=>{
  //   console.log('called',this.state.type)
  //   if (this.state.type === 'up') {
  //     this.setState({type: 'down'});
  //     this.RBSheet.close();
  //   } else {
  //     this.setState({type: 'up'});
  //     this.RBSheet.open();
  //   }
  // };

  render() {
    if (this.props.route.params) {
      if (this.props.route.params.Total_order_count != null) {
        var total_order_count = this.props.route.params.Total_order_count;
      } else {
        var total_order_count = '';
      }
    }

    return (
      <View style={styles.container1}>
        <CurvedBottomBar.Navigator
          style={
            ([this.state.type == 'down'],
            {
              marginBottom: 0,
            })
          }
          type={this.state.type}
          height={60}
          circleWidth={55}
          bgColor="#0F2A37"
          borderTopLeftRight={false}
          borderBottomLeftRight={false}
          initialRouteName="Home"
          swipeEnabled={false}
          renderCircle={({selectedTab, navigate}) => (
            <TouchableOpacity
              style={[
                this.state.type === 'down'
                  ? styles.btnCircle
                  : styles.btnCircleUp,
              ]}
              // onPress={this.onClickButton()}
              >
              {/* <Image
                source={require('../images/cyret_img.png')}
                resizeMode="contain"
                style={{width: 50, height: 50, backgroundColor: 'transparent',alignSelf:'center',alignItems: 'center'}}
              /> */}
            </TouchableOpacity>
          )}
          tabBar={this.renderTabBar}>
          <CurvedBottomBar.Screen
            name="Home"
            position="left"
            component={() => (
              <View style={styles.container_home}>
                <CardViewPage
                  data={total_order_count}
                  navigation={this.props.navigation}
                />
              </View>
            )}
          />
          <CurvedBottomBar.Screen
            name="Location_Transfer"
            component={() => (
              <View style={{flex: 1, backgroundColor: '#204A6C'}}>
                <Location_Transfer />
              </View>
            )}
            position="left"
          />
          <CurvedBottomBar.Screen
            name="Setting"
            component={() => (
              <View style={{marginTop: 20}}>{/* <Setting /> */}</View>
            )}
            position="right"
          />
          <CurvedBottomBar.Screen
            name="Profile"
            component={() => (
              <View style={{flex: 1, backgroundColor: '#204A6C'}}>
                <ProfilePage navigation={this.props.navigation} />
              </View>
            )}
            position="right"
          />
        </CurvedBottomBar.Navigator>
        <View>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            animationType="slide"
            height={700}
            closeOnPressBack={true}
            customStyles={{
              wrapper: {},
              draggableIcon: {
                backgroundColor: '#red',
              },
              container: {
                marginBottom: 0,
                borderRadius: 15,
                backgroundColor: '#FFF',
              },
            }}>
            {/* <LinearGradient colors={['#204A6C', '#204A6C']}> */}
            <View >
              <ScrollView>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom:60,
                }}>
                  {/* start Inventory */}
                <Text style={[styles.rbsheetSubHeadingText,{marginTop:10}]}>
                Inventory
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      <Image
                        source={require('../images/MenuIcons/LocationTransfer.png')}
                        style={styles.rbsheetImage}
                      />
                      <Text style={styles.rbsheetText}>
                      Location{'\n'} Transfer
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={require('../../src/images/MenuIcons/SingleItemTransfer.png')}
                        resizeMode="contain"
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={[styles.rbsheetText]}>
                      Single Item transfer
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={require('../images/MenuIcons/MultipleItemtransfer.png')}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={styles.rbsheetText}>Multiple Item transfer</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={require('../images/MenuIcons/CycleCount.png')}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={[styles.rbsheetText]}>
                      Cycle Count
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={'../images/MenuIcons/Replenishment.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={styles.rbsheetText}>
                      Replenishment
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={'../images/MenuIcons/LocationEnquiry.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={[styles.rbsheetText]}>
                      Location Inquiry
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* End Inventory */}

                {/* start Procurement */}
                <Text style={[styles.rbsheetSubHeadingText,{marginTop:20}]}>
                Procurement
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    // justifyContent: 'flex-end',
                   
                  }}>
                  <View style={[styles.rbsheetCardViewBg,{marginLeft:20}]}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{borderColor: 'red'}}>
                      {/* <Image
                        source={'../images/MenuIcons/POreceipt.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={styles.rbsheetText}>
                      PO receipt
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.rbsheetCardViewBg,{marginLeft:20}]}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={'../images/MenuIcons/PutAwayConfirmation.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={[styles.rbsheetText]}>
                      Put away confirmation
                      </Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                {/* End Procurement grp */}

                {/* start Sale Order */}
                <Text style={[styles.rbsheetSubHeadingText,{marginTop:20}]}>
                Sale Order
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{borderColor: 'red'}}>
                      {/* <Image
                        source={'../images/MenuIcons/ShippingConfirmation.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={styles.rbsheetText}>
                      Shipping Confirmation
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={'../images/MenuIcons/PickConfirmation.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={[styles.rbsheetText]}>
                      Pick Confirmation
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rbsheetCardViewBg}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={'../images/MenuIcons/BuildCarton.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={[styles.rbsheetText]}>
                      Build Carton
                      </Text>
                    </TouchableOpacity>
                  </View>
                  
                  
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                  }}>
                  <View style={[styles.rbsheetCardViewBg,{marginLeft:20}]}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={'../images/MenuIcons/BuildPallet.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={[styles.rbsheetText]}>
                      Build Pallet
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.rbsheetCardViewBg,{marginLeft:20}]}>
                    <TouchableOpacity onPress={() => {}}>
                      {/* <Image
                        source={'../images/MenuIcons/Palletization.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={styles.rbsheetText}>
                      Palletization
                      </Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                {/* End Sale Order */}

                {/* start Manufacturing */}
                <Text style={[styles.rbsheetSubHeadingText,{marginTop:20}]}>
                Manufacturing
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                  }}>
                  <View style={[styles.rbsheetCardViewBg,{marginLeft:20}]}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{borderColor: 'red'}}>
                      {/* <Image
                        source={'../images/MenuIcons/Materialissue.png'}
                        style={styles.rbsheetImage}
                      /> */}
                      <Text style={styles.rbsheetText}>
                      Material issue

                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* <View style={[styles.rbsheetCardViewBg,{marginLeft:20}]}>
                    <TouchableOpacity >
                       <Image
                        source={require('../images/MenuIcons/Manufacturingcompletion.png')}
                        style={styles.rbsheetImage}
                      /> 
                      <Text style={[styles.rbsheetText]}>
                      Manufacturing completion
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                  
                  
                  
                </View>
                {/*end  Manufacturing */}
                
                

                
                
              </View>
              </ScrollView>
            </View>
            
            <CurvedBottomBar.Navigator
              style={
                ([this.state.type == 'down'],
                {
                  marginBottom: 0,
                  // borderBottomLeftRadius: 50,
                  // borderBottomRightRadius: 50,
                })
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
                  // onPress={this.onClickButton}
                  >
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
            {/* </LinearGradient> */}
          </RBSheet>
        </View>
      </View>
    );
  }
}

export default Homescreen;