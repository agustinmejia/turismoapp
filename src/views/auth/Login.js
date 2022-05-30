import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Button,
    Alert
} from 'react-native';

export default class App extends Component {
    render() {

      return (
        <SafeAreaView>
            {/* <StatusBar barStyle="dark-content" /> */}
            <ScrollView>
                <View style={{flex: 1, paddingHorizontal: 20}}>
                    <View style={{flex: 1, flexDirection: 'row-reverse', paddingVertical: 20}}>
                        <Text>Iniciar sesión</Text>
                    </View>
                    <View style={{flex: 1, width: 100, height: 100, borderWidth: 2, borderColor: 'black', marginTop: 50}}>
                        <Text>imagen</Text>
                    </View>
                    <View style={{marginVertical: 30}}>
                        <Text style={{fontSize: 30}}>Bienvenido</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', marginVertical: 30}}>
                        <View style={{padding: 10}}>
                            <Button
                                title="Registrarse con Google"
                                // disabled
                                color="#E74C3C"
                                onPress={() => Alert.alert('Cannot press this one')}
                            />
                        </View>
                        <View style={{padding: 10}}>
                            <Button
                                title="Iniciar como invitado"
                                // disabled
                                color="#BFC9CA"
                                onPress={() => Alert.alert('Cannot press this one')}
                            />
                        </View>
                    </View>
                    <View style={{marginVertical: 10}}>
                        <Text>Más información</Text>
                    </View>
                    <View style={{marginVertical: 10}}>
                        <Text>By tapping Continue, Create Account or More options, I agree to Airbnb's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
      );
    }
}