import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { color } from '../thems/indeX';
import LOGOImage from '../assets/images/MainImage.png'


const Mainscreen = (props) => {

  return (
    <View style={styles.containerMain}>

      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.appname}>Expensic</Text>
          <Text style={styles.slogan}>Track Your Money</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={LOGOImage}  />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
   backgroundColor: color.Background,
    //justifyContent: 'center',
  alignItems: 'center',

  },
  titleContainer: {
    marginTop:150,
    alignItems: 'center',
    marginBottom:10
  },
  appname: {
    fontSize: 65,
    fontWeight: 'bold',
    letterSpacing: -3,
    color: 'white',
    textTransform: 'uppercase',
    shadowColor: 'red',
    shadowOffset: { width: 30, height: 10 },
    shadowOpacity:1,
    shadowRadius:0,
    elevation:0,


  },
  slogan: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 4,
    color: 'gold',
    textTransform: 'uppercase',
    shadowColor: 'pink',
    shadowOffset: { width:8, height: 2},
    shadowOpacity:8,
    shadowRadius:100,
    elevation:1,
  },
  imageContainer: {
    //backgroundColor:"pink",
    justifyContent: 'center',
   alignItems: 'center',
  },
  image: {
    width: '100%',
    height:"50%",
    resizeMode: 'cover',

  },
  buttonContainer: {
    flex:1,
    marginBottom: 50,
    justifyContent:'flex-end',
    shadowColor: 'gray',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 70,
  },


  button: {
    backgroundColor: color.button,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 15,
    borderColor: color.BColor,
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Mainscreen;