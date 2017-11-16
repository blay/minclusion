import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView, } from 'react-native';
import { List, ListItem } from 'react-native-elements';


class Settings extends Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor: 'transparent' }}>
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image   
            style={{ height:null, width:null, flex:1 }} 
            source={require('./images/Roadmap.png')}     />
        </View>
        
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', }}>
        <Text style={{ textAlign: 'center', fontSize: 40, color: '#fff', backgroundColor:'rgba(0, 0, 0, 0.5)', padding:10,  }}>
            Your Roadmap
          </Text>
       </View>
    </View>
    );
  }
}

export default Settings;
