import { View, Text } from 'react-native'
import React from 'react'
import styles from '../style/styles';


export default function CycleCount() {
  return (
    <View>
      <View style={{ backgroundColor: '#FFFF', height: '100%' }}>
        <SafeAreaView>
    
            
            <View style={{ marginBottom: 10}}>
              <View style={[styles.transfer_card,{ backgroundColor: '#0000',}]} >
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <View style={{ width: "75%", marginTop: 0, paddingLeft:10}}>
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
                  <View style={styles.verticleLine}></View>
                  <View style={{ alignSelf: 'center',paddingRight: 15 }}>
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
                  // marginLeft: '3%',
                  // marginRight: '3%',
                }}
              />
               <ScrollView horizontal={false} style={{height:'70%',backgroundColor:'#FAFAFA'}} shouldIndicatorHide={false}
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
                     

                      
                    </View>
                  </View>

                </View>

                
                <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10, marginBottom: 10 }}>
                  <View style={{ width: '100%' }}>
                    {/* <Text style={[styles.lt_text]}>From Location</Text> */}

                    <OutlineInput
                      value={this.state.From_Location}
                      height={40}

                      onChangeText={(e) => this.setState({ From_Location: e })}
                      label="From Location"
                      //
                      // fontSize={}
                      activeValueColor="#1d4355"
                      activeBorderColor="#365b6d"
                      activeLabelColor="#537789"
                      passiveBorderColor="#b2b2b2"
                      passiveLabelColor="#b2b2b2"
                      passiveValueColor="#1d4355"
                    />

                  </View>
                </View>
                <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10, marginBottom: 10 }}>
                  <OutlineInput
                    value={this.state.Lot_Number}
                    height={40}

                    onChangeText={(e) => this.setState({ Lot_Number: e })}
                    label="Lot Number"
                    //
                    // fontSize={}
                    activeValueColor="#1d4355"
                    activeBorderColor="#365b6d"
                    activeLabelColor="#537789"
                    passiveBorderColor="#b2b2b2"
                    passiveLabelColor="#b2b2b2"
                    passiveValueColor="#1d4355"
                  />
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
                </ScrollView>
            </View>
            
            <View
                style={{
                  borderBottomColor: '#365b6d',
                  borderBottomWidth: 1,
                  // marginLeft: '3%',
                  // marginRight: '3%',
                }}
              />
          <View style={{ padding: 7 ,height: '13%',backgroundColor:'#0F2A37'}}>
                <TouchableHighlight
                  style={[styles.transfer_buttonContainer]}
                  onPress={() => this.onClickListener()}>
                  <Text style={styles.transfer_Text}>Submit</Text>
                </TouchableHighlight>
              </View>
          
        </SafeAreaView>
      </View>
     
      </View>
  )
}