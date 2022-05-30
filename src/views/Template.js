import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    View,
    Text
} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Templato extends Component {
    render() {

      return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Template</Text>
            </View>
      );
    }
}