import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableHighlight,
    ScrollView,
    Image,
    FlatList,
    Animated,
    Alert
} from 'react-native';
import styles from '../style/styles';
import i18n from '../constant/i18n';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OutlineInput from 'react-native-outline-input';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import Swipeable from 'react-native-gesture-handler/Swipeable';


// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// Import RNPrint
import RNPrint from 'react-native-print';

export default class PickList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            type: 'up',
            flag1: false,
            DATA: [
                {
                    id: "1",
                    title: "Data Structures"
                },
                {
                    id: "2",
                    title: "STL"
                },
                {
                    id: "3",
                    title: "C++"
                },
                {
                    id: "4",
                    title: "Java"
                },
                {
                    id: "5",
                    title: "Python"
                },
                {
                    id: "6",
                    title: "CP"
                },
                {
                    id: "7",
                    title: "ReactJs"
                },
                {
                    id: "8",
                    title: "NodeJs"
                },
                {
                    id: "9",
                    title: "MongoDb"
                },
                {
                    id: "10",
                    title: "ExpressJs"
                },
                {
                    id: "11",
                    title: "PHP"
                },
                {
                    id: "12",
                    title: "MySql"
                },
            ]
        };
    }
    printHTML = async () => {
        await RNPrint.print({
          html:
            '<h1>Here will be Heading 1</h1><h2>Here will be Heading 2</h2><h3>Here will be Heading 3</h3>',
        });
      };

    async printPDF() {
        console.log('printpdf function called');
        let options={
            html:'<table><tr><th>FirstName</th><th>LastName</th></tr></table>',
            fileName:'tableTest',
            directory:'Documents',
        };
        let file = await RNHTMLtoPDF.convert(options)
        // Alert.alert(file.filePath);
        
      };

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

    Item = ({ title }) => {
        return (
            <View style={styles.item}>
                <Text>{title}</Text>
            </View>
        );
    }

    renderRigtActions = (progress, dragX) => {
        
        return (
            <View
                style={{
                    marginTop: 13,
                    marginBottom: 2,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    borderBottomRightRadius: 15,
                    borderTopRightRadius: 15,
                }}
            >
                <TouchableHighlight onPress={()=>this.printHTML()}>
                    <Image source={require('../images/PrintButton.png')} style={{
                        paddingHorizontal: 30,
                        paddingVertical: 20,
                        //   transform: [{ rotate: '90deg'}],
                        width: '100%',
                        height: '100%',
                    }}
                    />
                </TouchableHighlight>
            </View>
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
                <View style={{ backgroundColor: '#fff', height: '100%' }}>
                    <SafeAreaView>
                        {/* <View style={styles.home_card_heder}>

                            <Text style={[styles.home_card_hedertext, { marginLeft: 10 }]}>
                                Pick List
                            </Text>
                        </View> */}

                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <View style={{ width: "75%", backgroundColor: '#FAFAFA', paddingLeft: 10 }}>
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
                                <View style={{ alignSelf: 'center', paddingRight: 15 }}>
                                    <Image
                                        source={require('../images/qr-code-scan.png')}
                                        resizeMode="contain"
                                        style={{ width: 35, height: 35, marginTop: 0 }}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                <View
                                    style={{
                                        height: 140,
                                        marginBottom: 10,
                                        alignSelf: 'center',
                                        marginTop: 10,
                                        flexDirection: 'row',
                                    }}>
                                    <View
                                        style={{
                                            height: 130,
                                            width: '100%',
                                            alignSelf: 'center',
                                            borderBottomLeftRadius: 15,
                                            borderTopLeftRadius: 15,
                                            backgroundColor: '#365B6D',
                                            flexDirection: 'row',
                                            borderBottomRightRadius: 15,
                                            borderTopRightRadius: 15,
                                            elevation: 7,
                                            shadowColor: '#D1D1D1',
                                        }}>
                                        {/* <TouchableOpacity onPress={() => this.getListViewItem(item)}> */}
                                        <View
                                            style={{ height: '100%', width: '100%', paddingTop: 18 }}>
                                            <View
                                                style={{
                                                    height: 35,
                                                    width: '100%',
                                                    paddingLeft: 15,
                                                    paddingRight: 15,
                                                    justifyContent: 'space-between',
                                                    flexDirection: 'row',
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: 15,

                                                        color: 'white',
                                                    }}>
                                                    Line Number/Item Code
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 15,

                                                        color: 'white',
                                                    }}>
                                                    Qty/Uom
                                                </Text>
                                            </View>
                                            <View style={{ height: '100%', width: '100%' }}>
                                                <View
                                                    style={{
                                                        height: 35,
                                                        width: '100%',
                                                        paddingLeft: 15,
                                                        paddingRight: 15,
                                                        justifyContent: 'space-between',
                                                        flexDirection: 'row',
                                                    }}>
                                                    <Text
                                                        style={{
                                                            fontSize: 15,

                                                            color: 'white',
                                                        }}>
                                                        Description 1
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 15,

                                                            color: 'white',
                                                        }}>
                                                        Location/Batch
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        height: 35,
                                                        width: '100%',
                                                        paddingLeft: 15,
                                                        paddingRight: 15,
                                                        justifyContent: 'space-between',
                                                        flexDirection: 'row',
                                                    }}>
                                                    <Text
                                                        style={{
                                                            fontSize: 15,

                                                            color: 'white',
                                                        }}>
                                                        Description 2
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 15,

                                                            color: 'white',
                                                        }}>
                                                        Status/Barcode(Lot)
                                                    </Text>
                                                </View>
                                                {/* <View
                    style={{
                      height: 25,
                      width: '100%',
                      marginLeft: '5%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                         
                        color: '#365B6D',
                      }}>
                      Order Amount : 
                    </Text>
                   
                  </View> */}

                                                {/* <View
                    style={{
                      height: 35,
                      width: '100%',
                      marginLeft: '75%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      onPress={() => this.getListViewItem(item)}>
                      <Text style={styles.detailButton}>View</Text>
                     
                    </TouchableOpacity>
                  </View> */}
                                            </View>
                                        </View>

                                        {/* </TouchableOpacity> */}
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    borderBottomColor: '#365b6d',
                                    borderBottomWidth: 2,
                                    // marginLeft: '3%',
                                    // marginRight: '3%',
                                }}
                            />
                            <ScrollView horizontal={false} style={{ height: '80%', backgroundColor: '#d1d1d1' }} shouldIndicatorHide={false}
                                scrollEventThrottle={5}>
                                <View>
                                    <FlatList
                                        data={this.state.DATA}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <Swipeable renderRightActions={this.renderRigtActions}
                                                    onSwipeableLeftOpen={() => console.log('opening')} onSwipeableRightOpen={() => console.log("reject swap")}>
                                                    <View
                                                        key={item}
                                                        style={{
                                                            height: 140,
                                                            paddingLeft: 15,
                                                            paddingRight: 0,
                                                            alignSelf: 'center',
                                                            marginTop: '2%',
                                                            flexDirection: 'row',
                                                        }}>
                                                        <View
                                                            style={{
                                                                height: 130,
                                                                width: '100%',
                                                                alignSelf: 'center',
                                                                borderBottomLeftRadius: 15,
                                                                borderTopLeftRadius: 15,
                                                                backgroundColor: '#FAFAFA',
                                                                flexDirection: 'row',
                                                                borderBottomRightRadius: 15,
                                                                borderTopRightRadius: 15,
                                                                elevation: 7,
                                                                shadowColor: '#D1D1D1',
                                                            }}>
                                                            {/* <TouchableOpacity onPress={() => this.getListViewItem(item)}> */}
                                                            <View
                                                                style={{ height: '100%', width: '100%', paddingTop: 25 }}>
                                                                <View
                                                                    style={{
                                                                        height: 35,
                                                                        width: '100%',
                                                                        paddingLeft: 15,
                                                                        paddingRight: 15,
                                                                        justifyContent: 'space-between',
                                                                        flexDirection: 'row',
                                                                        flexWrap: 'wrap'
                                                                    }}>
                                                                    <Text
                                                                        style={{
                                                                            fontSize: 15,

                                                                            // color: ' #545454',
                                                                        }}>
                                                                        24-335-0025-01-M
                                                                    </Text>
                                                                    <Text
                                                                        style={{
                                                                            fontSize: 15,

                                                                            // color: ' #545454',
                                                                        }}>
                                                                        48 EA
                                                                    </Text>
                                                                </View>
                                                                <View style={{ height: '100%', width: '100%' }}>
                                                                    <View
                                                                        style={{
                                                                            height: 35,
                                                                            width: '100%',
                                                                            paddingLeft: 15,
                                                                            paddingRight: 15,
                                                                            justifyContent: 'space-between',
                                                                            flexDirection: 'row',
                                                                            flexWrap: 'wrap'
                                                                        }}>
                                                                        <Text
                                                                            style={{
                                                                                fontSize: 15,

                                                                                // color: ' #545454',
                                                                            }}>
                                                                            335 MAXI S WHITE
                                                                        </Text>
                                                                        <Text
                                                                            style={{
                                                                                fontSize: 15,

                                                                                // color: ' #545454',
                                                                            }}>
                                                                            101300
                                                                        </Text>
                                                                    </View>
                                                                    <View
                                                                        style={{
                                                                            height: 35,
                                                                            width: '100%',
                                                                            paddingLeft: 15,
                                                                            paddingRight: 15,
                                                                            justifyContent: 'space-between',
                                                                            flexDirection: 'row',
                                                                        }}>
                                                                        <Text
                                                                            style={{
                                                                                fontSize: 15,

                                                                                // color: ' #545454',
                                                                            }}>
                                                                            25 KG
                                                                        </Text>

                                                                        <Text
                                                                            style={{
                                                                                fontSize: 15,
                                                                                backgroundColor: '',
                                                                                // color: ' #545454',
                                                                                marginBottom: 15
                                                                            }}>
                                                                            560
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                            {/* </TouchableOpacity> */}
                                                        </View>
                                                    </View>
                                                </Swipeable>
                                            );
                                        }}
                                    />
                                </View>
                            </ScrollView>
                        </View>

                        {/* <View
                                style={{
                                    borderBottomColor: '#365b6d',
                                    borderBottomWidth: 2,
                                    // marginLeft: '3%',
                                    // marginRight: '3%',
                                }}
                            />
                        <View style={{ padding: 5 }}>
                            <TouchableHighlight
                                style={[styles.buttonContainer]}
                                onPress={() => this.onClickListener()}>
                                <Text style={styles.loginText3}>Print PackSlip</Text>
                            </TouchableHighlight>
                        </View> */}

                    </SafeAreaView>
                </View>
                {/* <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    bottom: 0
                }}>
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
                        renderCircle={({ selectedTab, navigate }) => (
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
                                <View style={{ flex: 1, backgroundColor: '#204A6C' }}></View>
                            )}
                            position="right"
                        />
                    </CurvedBottomBar.Navigator>
                </View> */}
            </View>
        );
    }
}
