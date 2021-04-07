import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AddItem from './AddItem';

const Header = ({addItem}) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const onPress = () => {
    setIsAddMode(!isAddMode);
  }
  return(
    <TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.text}><Icon name='angle-double-right'size={25} style={{color:'#766a8d'}} /> Make your  <Text style={styles.brandText} >DECO SHOP </Text> list</Text>
        <Icon name='cart-plus' size={25} style={{color:'#766a8d'}} onPress={onPress}/>
      </View>
      <View>
      { isAddMode ? <AddItem addItem={addItem}/> : null }
      </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#dde1e9',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#766a8d',
    fontSize: 20,
    fontStyle: "italic",
    paddingLeft: 55,
  },
  brandText: {
    color: '#766a8d',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    fontStyle:'normal',
  }
});

export default Header;