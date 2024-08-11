import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal, Alert, TextInput } from 'react-native';
import { color } from '../thems/indeX';


const Expense = () => {



  const [modalshow, setmodalshow] = useState(false);
  const [lessbalance, setlessbalance] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Expense Screen</Text>

      <Modal animationType='slide'
        transparent={true}
        visible={modalshow}
        onRequestClose={() => { Alert.alert('Modal Close'); setmodalshow(!modalshow); }}
      >
        <View style={styles.centerdview}>
          <View style={styles.modalview}>
            <Text style={{ fontWeight: 'bold' }}>Expense Made For</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%' }}
              placeholder=" Ex.coffe etc"
              keyboardType='default'
            />

            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}>Amount</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', }}
              onChangeText={(lessbalance) => setlessbalance(lessbalance)}
              value={lessbalance}
              placeholder="0₹"
            // keyboardType='number-pad'
            />
            <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

              <Button color={'red'} title=' Done ' />

              <Button color={'red'} title='     X      ' onPress={() => setmodalshow(!modalshow)} />
            </View>
          </View>
        </View>
      </Modal>


      {/*<View style={{ flex: 1, justifyContent: 'flex-end', }}>
        <TouchableOpacity style={styles.addbtn} onPress={() => setmodalshow(true)}>
          <Text style={styles.addtext}>ADD</Text>
        </TouchableOpacity>
  </View>*/}

      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 1, }}>
        <TouchableOpacity style={styles.addbtn} onPress={() => setmodalshow(true)}>
          <Text style={styles.addtext}>ADD</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACE1AF',
  },
  centerdview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  modalview: {
    margin: 20,
    height: '40%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addbtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 410,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

  },
  addtext: {
    fontSize: 20, color: 'white', fontWeight: '900'

  }


});

export default Expense;