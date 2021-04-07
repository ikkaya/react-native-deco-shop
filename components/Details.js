import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import ListItem from './ListItem';


const Details = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Clock'},
    {id: uuidv4(), text: 'Mirror'},
    {id: uuidv4(), text: 'Flower'},
    {id: uuidv4(), text: 'Candle'},
  ]);
  

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', {text:'Ok'})
    }else{
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  }

  return(
    <View style={styles.container}>
      <Header addItem={addItem}/>
      <FlatList style={{marginTop:10}}
      data={items} 
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  }

});

export default Details;