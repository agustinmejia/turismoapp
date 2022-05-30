import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    View,
    Text,
    TextInput,
    Appearance
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Search extends Component {
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
                <View style={{padding: 20}}>
                    <View style={{alignItems: 'center', width: screenWidth -40, flexDirection: 'row', borderColor: '#E5E8E8', borderWidth: 1, borderRadius: 10}}>
                        <TextInput
                            value='Quieres conocer Trinidad?'
                            onChangeText={ (text) => this.setState({textSearch: text}) }
                            style={{paddingLeft: 20, width: screenWidth -80, height: 55}}
                        />
                        <Icon name="search1" size={20} />
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="contacts" size={80} style={{marginBottom: 20}} />
                    <Text>Realizar busqueda</Text>
                </View>
            </SafeAreaView>
        );
    }
}