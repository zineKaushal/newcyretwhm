import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import styles from '../style/styles';
import '../constant/i18n';
import {useTranslation} from 'react-i18next';

export default function Setting() {
  const countries = ['English', 'Hindi', 'Marathi', 'German', 'French'];

  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setLanguage(value);
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <View
        flexDirection="row"
        style={{justifyContent: 'center', paddingTop: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 23, color: '#fff'}}>
          Select Language :{' '}
        </Text>
        <SelectDropdown
          data={countries}
          defaultValue={'English'}
          onSelect={index => {
         
            changeLanguage(index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
           
            return item;
          }}
        />
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            color: '#33A850',
            textAlign: 'center',
            marginTop: 30,
          }}>
          {t('Language')}{' '}
        </Text>
        
      </View>
    </View>
  );
}
