import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    FlatList,
    Appearance
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { env } from "../config";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const data = require('../data.json');

export default class CategoriesList extends Component {
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
            <SafeAreaView style={{backgroundColor: this.state.colorScheme == 'dark' ? '#303030' : '#ffffff'}}>
                <View style={{padding: 30, alignItems: 'center'}}>
                    <Text style={{fontSize: 25}}>Populares</Text>
                </View>

                <FlatList
                    data={data.home.populars}
                    renderItem={({item, index})=>
                        <TouchableOpacity key={index}>
                            <View style={{width: (screenWidth /2) -20, height: 180, margin: 10, borderRadius: 5, borderWidth: 1, borderColor: '#E5E8E8'}}>
                                <View style={{padding: 0}}>
                                    <Image 
                                        source={{uri: item.image}}
                                        style={{width: (screenWidth /2) -20, height: 90, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View style={{flex: 1, paddingHorizontal: 7, paddingVertical: 10}}>
                                    <Text style={{fontSize: 18, fontWeight: '600'}} numberOfLines={1}>{ item.title }</Text>
                                    <Text numberOfLines={2}>{ item.description }</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    numColumns={2}
                />
            </SafeAreaView>
        );
    }
}