import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Appearance
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/AntDesign';

import Home from './src/views/Home';
import CategoriesList from './src/views/CategoriesList';
import PlaceDetails from './src/views/PlaceDetails';
import Search from './src/views/Search';
import Favorites from './src/views/Favorites';
import Template from './src/views/Template';

// Config
import { env } from './src/config';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500)
  }, []);

  if(isLoading){
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // let iconName, iconText;
            // if (route.name === 'stackNavigator') {
            //   iconName = 'home';
            //   iconText = 'Inicio';
            // } else if (route.name === 'search') {
            //   iconName = 'search1';
            //   iconText = 'Explora';
            // } else if (route.name === 'favorites') {
            //   iconName = 'heart';
            //   iconText = 'Favoritos';
            // } else if (route.name === 'profile') {
            //   iconName = 'user';
            //   iconText = 'Perfil';
            // }
            // return <View style={{alignItems: 'center', marginBottom: -10}}>
            //         <Icon name={iconName} size={size} color={color} />
            //         <Text style={{fontSize: 9, color: 'black'}}>{ iconText }</Text>
            //       </View>;

            if (route.name === 'stackNavigator') {
              return <View style={{alignItems: 'center', marginBottom: -10}}>
                        <Image 
                          source={require('./src/assets/images/icons/search.png')}
                          style={{width: 25, height: 25}}
                          resizeMode="cover"
                        />
                        <Text style={{fontSize: 9, color: 'black'}}>Explora</Text>
                      </View>;
            } else if (route.name === 'search') {
              return <View style={{alignItems: 'center', marginBottom: -10}}>
                        <Image 
                          source={require('./src/assets/images/icons/2.png')}
                          style={{width: 25, height: 25}}
                          resizeMode="cover"
                        />
                        <Text style={{fontSize: 9, color: 'black'}}>Enamorate</Text>
                      </View>;
            } else if (route.name === 'favorites') {
              return <View style={{alignItems: 'center', marginBottom: -10}}>
                        <Image 
                          source={require('./src/assets/images/icons/3.png')}
                          style={{width: 25, height: 25}}
                          resizeMode="cover"
                        />
                        <Text style={{fontSize: 9, color: 'black'}}>Hecho en Trinidad</Text>
                      </View>;
            } else if (route.name === 'profile') {
              return <View style={{alignItems: 'center', marginBottom: -10}}>
                      <Icon name='adduser' size={size} color={color} />
                      <Text style={{fontSize: 9, color: 'black'}}>Yo ciudadano</Text>
                    </View>;
            }else if (route.name === 'city') {
              return <View style={{alignItems: 'center', marginBottom: -10}}>
                      <Icon name='picture' size={size} color={color} />
                      <Text style={{fontSize: 9, color: 'black'}}>Mi trini</Text>
                    </View>;
            }
          },
          tabBarActiveTintColor: env.colors.primary,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="stackNavigator"
          component={StackNavigator}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Template}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name="city"
          component={Template}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const SplashScreen = () => {
  return (
    <View style={ style.container }>
        <Image 
          source={require('./src/assets/images/icon.png')}
          style={style.logo}
          resizeMode="contain"
        />
        {/* <Text style={style.title}>{env.appName}</Text> */}
        <View style={style.footer}>
            <Text style={style.footerText}>Powered by <Text style={style.footerTextAutor}>{env.autor}</Text></Text>
        </View>
    </View>
  )
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
    fontWeight: 'bold'
  }
});

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="placeDetails"
          component={PlaceDetails}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="categoriesList"
          component={CategoriesList}
          options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
  );
}
