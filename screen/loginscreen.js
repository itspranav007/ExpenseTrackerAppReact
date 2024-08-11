import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { color } from '../thems/indeX';


const Loginscreen = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const Login =()=>{

        if(username =='Admin' && password == '1234'){
            props.navigation.navigate('Home')
        }
        else{
            Alert.alert("Error", "Username & Password is Incorrect");
        }
    }



    const handleLogin = () => {
        console.log('Login button pressed!');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo2.png')} // Add your logo image here
                style={styles.logo}
            />
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#666"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#666"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={Login}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('Main')}>
                <Text style={styles.linkText}>Back</Text>
            </TouchableOpacity>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:color.Background,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        alignSelf: 'center',

    },
    form: {
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#333',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    input: {
        height: 60,
        borderColor: '#444',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20,
        color: '#fff',
        fontSize: 20,
      //  fontFamily: 'NetflixSans',
       // textTransform: 'uppercase'
    },
    button: {
        backgroundColor:color.button,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
       // fontFamily: 'NetflixSans',
        textTransform: 'uppercase'
    },
    link: {
        marginTop: 20,
    },
    linkText: {
        fontSize: 16,
        color:'white',
        textDecorationLine: 'underline',
    },
});

export default Loginscreen;