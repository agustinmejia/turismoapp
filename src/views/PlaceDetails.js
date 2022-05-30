import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Appearance
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/AntDesign';
import { env } from "../config";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const data = require('../../src/data.json');

export default class PlaceDetails extends Component {
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginTop: 10}}>
                        <View style={{flex: 1, marginHorizontal: 10, width: screenWidth -20, height: 280, borderWidth: 1, borderRadius: 15}}>
                            <Image 
                                source={{uri: 'https://cdn.pixabay.com/photo/2016/11/19/12/44/burgers-1839090_960_720.jpg'}}
                                style={{width: screenWidth -20, height: 280, borderRadius: 15}}
                                resizeMode="cover"
                            />
                        </View>
                        <View>
                            <View style={{margin: 15, paddingBottom: 20, borderBottomColor: '#E5E8E8', borderBottomWidth: 1}}>
                                <Text style={{fontSize: 20}}>Churrasquería / Toros</Text>
                                <Text style={{fontSize: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'column', marginVertical: 10}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        data.home.populars.map((item, index) => {
                                            return (
                                                <TouchableOpacity key={index}>
                                                    <View style={{width: 160, height: 150, marginHorizontal: 5, borderRadius: 5, borderWidth: 1, borderColor: '#E5E8E8'}}>
                                                        <View style={{padding: 0}}>
                                                            <Image 
                                                                source={{uri: item.image}}
                                                                style={{width: 157, height: 90, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
                                                                resizeMode="cover"
                                                            />
                                                        </View>
                                                        <View style={{flex: 1, paddingHorizontal: 7, paddingVertical: 10}}>
                                                            <Text numberOfLines={2}>{ item.description }</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>

                            <View>
                                <View style={{marginTop: 30, paddingHorizontal: 10}}>
                                    <Text style={{fontSize: 18}}>Ubicación</Text>
                                </View>
                                <MapView
                                    ref={map => {this.map = map}}
                                    provider={PROVIDER_GOOGLE}
                                    style={{height: 200, width: screenWidth, marginTop: 20}}
                                    initialRegion={
                                        {
                                            latitude: env.location.latitude,
                                            longitude: env.location.longitude,
                                            latitudeDelta: 0.0422,
                                            longitudeDelta: screenWidth / (screenHeight - 130) * 0.0422
                                        }
                                    }
                                >
                                    <Marker
                                        coordinate={
                                            { 
                                                latitude: env.location.latitude,
                                                longitude: env.location.longitude
                                            }
                                        }
                                        title="Churrasquería 7 Toros"
                                        description="Av. 6 de agosto casi esq. Santa Cruz"
                                    >
                                    <Image
                                        source={require('../../src/assets/images/marker.png')}
                                        style={{ width: 60, height: 60 }}
                                    />
                                    </Marker>
                                </MapView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}