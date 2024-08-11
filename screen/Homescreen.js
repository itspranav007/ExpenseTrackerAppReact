import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,Alert, Modal, TextInput, FlatList, KeyboardAvoidingView, Image, } from 'react-native';
import { color } from '../thems/indeX';
import RadioForm from 'react-native-simple-radio-button';
import TodoIcon from '../assets/images/icon1.png'
import { StatusBar } from 'expo-status-bar';






const Homescreen = (props, navigation) => {

  const [modalshow, setmodalshow] = useState(false);

  const [value, setvalue] = useState(0);
  const [todo, setTodo] = useState('');
  const [amount, setAmount] = useState(0);
  const [expense, setexpense] = useState(0);
  const [income, setincome] = useState(0);
  const [todoList, setTodoList] = useState([]);
  //const [todocolor, settodocolor] = useState("yellow");



  const items = [
    { label: "Expense", value: 0 },
    { label: "Income", value: 1 },
  ]

  const renderTodo = ({ item }) => {
    return (
      <View style={styles.todoView}>
        <View style={styles.todoouter}>



          <View style={{ flexDirection: 'row', justifyContent: 'flex-start',alignItems:'center',paddingBottom:8, }}>

         <View style={styles.icon}>
       {/*}  <Text ><Image source={TodoIcon}  style={{ width:35, height:50, resizeMode: 'center',}}/></Text>*/}
         </View>
            <Text style={styles.todoText}>{item.title}</Text>
          </View>
          <Text style={styles.todoTextamt}>₹ {item.Amount}</Text>
        </View>
      </View>
    );
  };

  const handleTodo = () => {


    //Expense
    if (value === 0) {
      //Alert.alert('Insufficient balance'); && amount > balance
      setTodoList([...todoList, { id: Date.now().toString(), title: todo, Amount: amount }]);
      setexpense(expense + parseInt(amount));
      //settodocolor("red");
      setmodalshow(!modalshow)
    }
    else {//Income
      setTodoList([...todoList, { id: Date.now().toString(), title: todo, Amount: amount }]);
      setincome(income + parseInt(amount));
      // settodocolor("green");
      setmodalshow(!modalshow)

    }

    setTodo('');
    setAmount('');
  }


  return (
    <View style={styles.MainView}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 15,marginTop:20 }}>
       <TouchableOpacity><Text style={{ fontSize: 30, fontWeight: '700', paddingRight: 40, color: color.Font, }} onPress={() => props.navigation.navigate('Profile')}>+</Text></TouchableOpacity>
        <Text style={{ fontSize:45, fontWeight: '700', paddingRight: 40, color: color.Font}}>FinTracker</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}><Text style={{ fontSize: 15, fontWeight: '800', color: color.Font ,paddingRight:20}}>LogOut</Text></TouchableOpacity>

      </View>

      <View style={styles.availablebalance}>
        <View style={styles.expense}>
          <Text style={{ color: color.Font, fontSize: 30, fontWeight: '400', fontVariant: color.Smallcaps }}>Expense</Text>
          <Text style={{ color: 'red', fontSize: 25, fontWeight: '800' }}>-{expense} ₹</Text>
        </View>
        <Text />
        <View style={styles.expense}>
          <Text style={{ color: color.Font, fontSize: 30, fontWeight: '400', fontVariant: color.Smallcaps }}>Income</Text>
          <Text style={{ color: 'green', fontSize: 25, fontWeight: '800' }}>+{income} ₹</Text>
        </View>

      </View>

      <Text />

      <View style={styles.FlatListView}>
        <FlatList
          data={todoList}
          onEndReachedThreshold={1}
          renderItem={renderTodo}

          ListHeaderComponent={() => (
            <View style={{}}>
              {/*<Text style={{backgroundColor:'white',fontSize:15,color:'black',fontWeight:'900',width:'20%',height:25,textAlign:'center',borderRadius:10,alignItems:'center'}}>View All</Text>*/}
              <Text />
            </View>

          )}
        />
      </View>

      <Modal animationType='fade'
        transparent={true}
        visible={modalshow}
        onRequestClose={() => { Alert.alert('Modal Close'); setmodalshow(!modalshow); }}
      >
        <View style={styles.centerdview}>



        <View style={styles.modalview}>
  <KeyboardAvoidingView>
    <Text style={{ fontWeight: 'bold', color: color.Font, fontFamily: color.Fontfamily, fontSize: 17 }}>
      Expense Made For
    </Text>

    <TextInput
      style={styles.textinput}
      placeholder='Enter Name'
      value={todo}
      onChangeText={(usertext) => setTodo(usertext)}
    />

    <Text />
    <Text style={{ fontWeight: 'bold', color: color.Font, fontFamily: color.Fontfamily, fontSize: 17 }}>
      Amount
    </Text>

    <TextInput
      style={styles.textinput}
      placeholder='Enter Amount'
      value={amount}
      onChangeText={(amount) => setAmount(amount)}
    />

    <Text />
    <RadioForm
      radio_props={items}
      initial={value}
      onPress={(value) => setvalue(value)}
      buttonColor="white"
      labelColor="white"
      selectedButtonColor="gray"
      selectedLabelColor="white"
      formHorizontal={true}
      labelHorizontal={true}
      style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
    />

    <Text />
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <Button
        color={color.button}
        title='Done'
        onPress={() => {
          if (!todo || !amount) {
            Alert.alert('Error', 'Please fill all inputs');
          } else {
            handleTodo();
          }
        }}
      />

      <Button
        color={color.button}
        title='     X      '
        onPress={() => setmodalshow(!modalshow)}
      />
    </View>
  </KeyboardAvoidingView>
          </View>

        </View>
      </Modal>

      <View style={styles.AddbtnView}>
        <TouchableOpacity style={styles.Addbtnbgc} onPress={() => setmodalshow(true)}><Text style={{ color: color.Font, fontSize: 25, fontWeight: '800' }}>ADD</Text></TouchableOpacity>
      </View>




    </View>



  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: color.Background,
    padding: 10,

  },

  availablebalance: {
    backgroundColor: 'rgb(15, 23, 42)',
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
    height: "19%",
    borderColor: color.BColor,
    //borderWidth: 2,
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 70,

    borderRightWidth:3,
    borderLeftWidth:5,
    borderTopWidth:4,
    borderBottomWidth:1,

  },
  expense: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingRight: 20
  },
  centerdview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  FlatListView: {
    //backgroundColor:'pink',
    height: '61%'
  },
  modalview: {
    margin: 20,
    height: '70%',
    width: '90%',
    backgroundColor: color.Background,
    borderColor: color.BColor,
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Addbtnbgc: {
    backgroundColor: color.button,
    alignItems: 'center',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    //  borderTopLeftRadius: 50,
    //borderTopRightRadius: 50,

    borderRadius: 20,
    borderColor: color.BColor,
    borderWidth: 2
  },
  AddbtnView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  todoouter: {
    height:65,
    width: "100%",
    borderRadius: 15,
    marginBottom: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    borderColor:'white',
    //borderWidth:1,
    borderRightWidth:3,
    borderLeftWidth:3,
    borderTopWidth:1,
    borderBottomWidth:1,


  },
  todoView: {
    // paddingVertical: 10,
    paddingHorizontal:10,

  },
  icon: {
   //backgroundColor: 'pink',
    //height:40,
    //width: "30%",
  //  borderColor:'red',
   // borderWidth:1.5,
    //borderRadius:10,
   // marginTop:10,

  },
  todoText: {
    color: 'black',
    fontSize:25,
    fontWeight: 'bold',
    marginTop:10,
   // marginBottom:13,
    paddingLeft:10

  },
  todoTextamt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: color.Font,
    fontFamily: color.Fontfamily,
    paddingRight: 30

  },
  textinput: {
    borderWidth:1.5,
    fontSize: 20,
    paddingHorizontal: 20,
    borderColor: color.BColor,
    width: '100%',
    height:50,
    color: color.Font,
  },


});

export default Homescreen;