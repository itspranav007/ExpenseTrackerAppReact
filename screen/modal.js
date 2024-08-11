import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, TextInput, FlatList, ScrollView } from 'react-native';
import { color } from '../thems/indeX';
import RadioForm from 'react-native-simple-radio-button';

const Modalx = () => {
  const [todo, setTodo] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [balance2, setBalance2] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [todocolor,settodocolor]=useState("yellow");

  const [value, setvalue] = useState(0);

  const items = [
    { label: "Expense", value: 0 },
    { label: "Income", value: 1 },
  ]


  const renderTodo = ({ item}) => {
    return (
      <View style={[styles.todoouter,{backgroundColor:todocolor}]}>
        <Text style={styles.todoText}>Expense:  {item.title}</Text>
        <Text style={styles.todoText}>Amount:  {item.Amount}</Text>
      </View>
    );
  };

  const handleTodo = () => {
    //Expense
    if ( value === 0 && amount > balance ){
      //Alert.alert('Insufficient balance');
      setTodoList([...todoList, { id: Date.now().toString(), title: todo, Amount: amount }]);
      setBalance(balance + parseInt(amount));
      settodocolor("red");
    }
    else {//Income
      setTodoList([...todoList, { id: Date.now().toString(), title: todo, Amount: amount }]);
      setBalance2(balance2 + parseInt(amount));
      settodocolor("green");

    }


  };


  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>Expense :{balance}</Text>
      <Text style={styles.todoText}>Income :{balance2}</Text>
      <Text />

      <TextInput
        style={styles.textinput}
        placeholder='Enter Name'
        value={todo}
        onChangeText={(usertext) => setTodo(usertext)}
      />
      <Text />

      <TextInput
        style={styles.textinput}
        placeholder='Enter Amount'
        value={amount}
        onChangeText={(amount) => setAmount(amount)}
      />
      <Text/>
      <RadioForm
        radio_props={items}
        initial={value}
        onPress={(value) => setvalue(value)}
        buttonColor="Red"
        labelColor="red"
        selectedButtonColor="green"
        selectedLabelColor="green"
        formHorizontal={true}
        labelHorizontal={true}
        style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
      />

      <Text />
      <Button title='ADD' onPress={handleTodo} />

      <Text />
     <ScrollView>
      <FlatList data={todoList} renderItem={renderTodo} />
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  todoouter: {
    borderColor: 'black',
    height: 95,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 14,
  justifyContent:'center'
  },
  todoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textinput: {
    borderColor: 'red',
    borderWidth: 2,
    fontSize: 16,
  },
});

export default Modalx;