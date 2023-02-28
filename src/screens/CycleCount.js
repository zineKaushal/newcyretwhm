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
} from 'react-native';import React from 'react'
import styles from '../style/styles';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';


export default function CycleCount() {
  const countries = ['UOM', 'GM', 'CM', 'M'];
  return (
    <View style={{backgroundColor: '#FFFF', flex: 1}}>
      <SafeAreaView>
        <View>
          <View style={[styles.transfer_card, {backgroundColor: '#0000'}]}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '75%', margin: 5, paddingLeft: 10}}>
                <SelectDropdown
                  data={countries}
                  // style={{height:'10%',width:5}}
                  defaultButtonText={'Select UOM'}
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
                  buttonStyle={{
                    height: 40,
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderColor: '#b2b2b2',
                    borderWidth: 1,
                    borderRadius: 5,
                  }}
                  buttonTextStyle={{fontSize: 15, color: '#1d4355'}}
                  onSelect={index => {
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
              <View style={{alignSelf: 'center', paddingRight: 15}}>
                <Image
                  source={require('../images/qr-code-scan.png')}
                  resizeMode="contain"
                  style={{width: 35, height: 35, marginTop: 0}}
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
          <ScrollView
            horizontal={false}
            style={{height: '84%', backgroundColor: '#FAFAFA'}}
            shouldIndicatorHide={false}
            scrollEventThrottle={5}>
            <View
              style={{
                marginTop: '4%',
                paddingLeft: 10,
                paddingRight: 15,
                marginTop: 20,
                marginBottom: 10,
              }}>
              <View style={{}}>

              <DataTable
            data={[ 
                { name: 'Muhammad Rafeh', age: 21, gender: 'male' },
                { name: 'Muhammad Akif', age: 22, gender: 'male' },
                { name: 'Muhammad Umar', age: 21, gender: 'male' },
                { name: 'Amna Shakeel', age: 22, gender: 'female' },
                { name: 'Muhammad Ammar', age: 20, gender: 'male' },
                { name: 'Muhammad Moiz', age: 13, gender: 'male' }
            ]} // list of objects
            colNames={['name', 'age', 'gender']} //List of Strings
            colSettings={[
              { name: 'name', type: COL_TYPES.STRING, width: '40%' }, 
              { name: 'age', type: COL_TYPES.INT, width: '30%' }, 
              {name: 'gender', type: COL_TYPES.STRING, width: '30%'}
            ]}//List of Objects
            noOfPages={2} //number
            backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
            headerLabelStyle={{ color: 'grey', fontSize: 12 }} //Text Style Works
        />



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
        <View
          style={{backgroundColor: '#0F2A37', padding: 7, bottom: 0, left: 0}}>
          <TouchableHighlight
            style={[styles.transfer_buttonContainer]}
            onPress={() => this.onClickListener()}>
            <Text style={styles.transfer_Text}>Submit</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </View>
  );
}