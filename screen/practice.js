import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Practicescreen = (props) => {


  return (
    <View style={styles.containerMain}>
      <Text >Practice Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Practicescreen;
