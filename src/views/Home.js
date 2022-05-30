import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Appearance,
    StyleSheet,
    ImageBackground,
    TextInput
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/AntDesign';
import { env } from "../config";

import Carousel from 'react-native-snap-carousel';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const data = require('../../src/data.json');

const carousel = [
    require('../../src/assets/images/image.jpg'),
    require('../../src/assets/images/image1.jpg'),
    require('../../src/assets/images/image2.jpg'),
    require('../../src/assets/images/image5.jpg'),
    require('../../src/assets/images/image3.jpg'),
    require('../../src/assets/images/image4.jpg'),
    // 'https://www.ibolivia.org/wp-content/uploads/2018/09/catedral-de-trinidad-beni.jpg',
    // 'https://cdn.pixabay.com/photo/2020/01/01/14/59/person-4733756_960_720.jpg',
    // 'https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_960_720.jpg',
    // 'https://cdn.pixabay.com/photo/2021/12/15/07/29/saint-isaac-cathedral-6871954_960_720.jpg'
]

export default class Home extends Component {
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

    _renderItem = ({item, index}) => {
        return (
            <View style={{flex: 1, marginHorizontal: 10, width: screenWidth -20, height: 450, borderRadius: 15}}>
                <Image 
                    source={item}
                    style={{width: screenWidth -24, height: 448, borderRadius: 15}}
                    resizeMode="cover"
                />
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: this.state.colorScheme == 'dark' ? '#303030' : '#ffffff'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1}}>

                        <View style={{backgroundColor: 'black', paddingBottom: 220}}>
                            <View style={{padding: 20}}>
                                <View style={{alignItems: 'center', width: screenWidth -40, flexDirection: 'row', borderColor: '#E5E8E8', borderWidth: 2, borderRadius: 20, backgroundColor: 'white'}}>
                                    <TextInput
                                        value='Quieres conocer Trinidad?'
                                        onChangeText={ (text) => this.setState({textSearch: text}) }
                                        style={{paddingLeft: 20, width: screenWidth -80, height: 55}}
                                    />
                                    <Icon name="search1" size={20} />
                                </View>
                            </View>

                            <View style={{flex: 1, marginTop: 20, marginHorizontal: 10, width: screenWidth -20, height: 250, borderRadius: 15, marginBottom: 50, backgroundColor: '#fe365b', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20}}>
                                <Text style={{color: 'white', fontSize: 22, textAlign: 'center'}}>Estás a punto de descubrir la magia y la majestuosidad de esta hermosa tierra llamada</Text>
                                <TouchableOpacity style={{paddingVertical: 15, paddingHorizontal: 15, borderWidth: 1, borderColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                                    <Text style={{color: 'white', fontSize: 20}}>Más información</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{backgroundColor: 'transparent', marginTop: -220, zIndex: 10}}>
                            <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={carousel}
                                renderItem={this._renderItem}
                                sliderWidth={screenWidth}
                                itemWidth={screenWidth}
                                // layout={'tinder'}
                                loop={true}
                                autoplay={true}
                                autoplayDelay={100}
                                autoplayInterval={12000}
                            />
                        </View>

                        <View style={{flex: 1}}>
                            {/* Block 1 */}
                            <View style={{marginTop: 30, paddingHorizontal: 10}}>
                                <Text style={{fontSize: 25}}>Populares</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'column', marginVertical: 20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        data.home.populars.map((item, index) => {
                                            return (
                                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('placeDetails')}>
                                                    <View style={{width: 210, height: 220, marginHorizontal: 5, borderRadius: 10, borderWidth: 1, borderColor: '#E5E8E8'}}>
                                                        <View style={{padding: 0}}>
                                                            <Image 
                                                                source={{uri: item.image}}
                                                                style={{width: 207, height: 120, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
                                                                resizeMode="cover"
                                                            />
                                                        </View>
                                                        <View style={{flex: 1, paddingHorizontal: 7, paddingVertical: 10, backgroundColor: item.color, borderBottomStartRadius: 10, borderBottomEndRadius: 10}}>
                                                            <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}} numberOfLines={1}>{ item.title }</Text>
                                                            <Text style={{color: 'white'}} numberOfLines={2}>{ item.description }</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>

                            {/* Block 2 */}
                            <View style={{marginTop: 30, paddingHorizontal: 10}}>
                                <Text style={{fontSize: 25}}>Categorías</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'column', marginVertical: 20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        data.home.categories.map((item, index) => {
                                            return (
                                                <View key={index} style={{paddingHorizontal: 5}}>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('categoriesList')} style={{paddingVertical: 7, paddingHorizontal: 10, borderWidth: 1, borderColor: env.colors.primary, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                                                        <Text style={{color: env.colors.primary}}><Icon name={ item.icon } size={25} /> { item.name }</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>

                            <View style={{flex: 1, marginHorizontal: 10, marginVertical: 50, width: screenWidth -20, height: 450, borderRadius: 15}}>
                                <ImageBackground 
                                    source={require('../../src/assets/images/image1.jpg')}
                                    style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', width: screenWidth -24, height: 448, padding: 20}}
                                    imageStyle={{borderRadius: 15}}
                                    resizeMode="cover"
                                >
                                    <Text style={{fontSize: 35, textAlign: 'center', color:'white'}}>Déjate llevar por la curiosidad</Text>
                                    <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                                        <Text style={{fontSize: 25, color: '#fe365b'}}>TRINIDAD</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>


                            {/* Block 3 */}
                            <View style={{marginTop: 10, paddingHorizontal: 10}}>
                                <Text style={{fontSize: 25}}>Farmacias de turno</Text>
                            </View>
                            <View>
                                <MapView
                                    ref={map => {this.map = map}}
                                    provider={PROVIDER_GOOGLE}
                                    style={{height: 300, width: screenWidth, marginTop: 20}}
                                    initialRegion={
                                        {
                                            latitude: env.location.latitude,
                                            longitude: env.location.longitude,
                                            latitudeDelta: 0.0422,
                                            longitudeDelta: screenWidth / (screenHeight - 130) * 0.0422
                                        }
                                    }
                                >
                                    {
                                        data.home.pharmacy.map((location, index) => {
                                            return (
                                                <Marker
                                                    key={index}
                                                    coordinate={
                                                        { 
                                                            latitude: location.latitude,
                                                            longitude: location.longitude
                                                        }
                                                    }
                                                    title={location.title}
                                                    description={location.address}
                                                >
                                                <Image
                                                    source={require('../../src/assets/images/marker.png')}
                                                    style={{ width: 60, height: 60 }}
                                                />
                                                </Marker>
                                            )
                                        })
                                    }
                                </MapView>
                            </View>
                            {/* <View style={{height: 50}}></View> */}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flexDirection: 'column',
        width: 250,
        height: 250,
        marginBottom: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom:10,
    },
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30
    },
    footerText: {
        textAlign: 'center',
        fontSize: 15,
    },
    footerTextAutor: {
        fontWeight: 'bold',
    }
  });