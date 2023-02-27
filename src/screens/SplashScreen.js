import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../style/styles';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('AuthLoading'), 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagegif}
          resizeMode="contain"
          source={require('../images/CyretJDE.gif')}
        />
      </View>
    );
  }
}
