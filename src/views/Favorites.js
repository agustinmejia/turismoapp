import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    View,
    Text,
    Appearance
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Favorites extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorScheme: Appearance.getColorScheme()
        }
    }

    componentDidMount(){
        Appearance.addChangeListener(() => {
            this.setState({colorScheme: Appearance.getColorScheme()});
        });
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: this.state.colorScheme == 'dark' ? '#303030' : '#ffffff'}}>                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="frowno" size={80} style={{marginBottom: 20}} />
                    <Text>No tienes favoritos agregados</Text>
                </View>
            </SafeAreaView>
        );
    }
}