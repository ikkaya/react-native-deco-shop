import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Home = () => {
  
  return(
      <View >
        <View style={styles.home}>
          <Image source={require('../img/logohome.png')} style={styles.logo} />
          <Text style={styles.text}>  DECO SHOP</Text>
        </View>
        <View style={styles.sliderContainer} > 
          <Swiper autoplay height={200} activeDotColor='#2c6979cc'>
            <View style={styles.slide}>
              <Image source={require('../img/img7.jpg')} resizeMode='cover' style={styles.sliderImage} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../img/img8.jpg')} resizeMode='cover' style={styles.sliderImage}/>
            </View>
          </Swiper>
        </View>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemView}>
              <Icon name='magic' size={30} color='#9a6446' style={styles.icon} />
              <Text style={styles.listItemText}>Would you like to wave a magic wand to save time during shopping?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemView}>
              <Icon name='check-square-o' size={30} color='#9a6446' style={styles.icon} />
              <Text style={styles.listItemText}>Let's create your Deco Shop item list at home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemView}>
              <Icon name='info-circle' size={30} color='#9a6446' style={styles.icon} />
              <Text style={styles.listItemText}>Press the shopping cart icon in the Details page to add the items </Text>
          </View>
        </TouchableOpacity>
      </View>
      
    
  );
};

const styles = StyleSheet.create({
  home: {
    paddingTop: 50,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 30,
    width: 30,
  },
  text: {
    color: '#2c6979cc',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  listItem: {
    padding: 40,
    marginTop: 25,
    backgroundColor: 'white',
    borderBottomWidth: 8,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  listItemText: {
    fontSize: 17,
    color: '#ab7151',
  }
});

export default Home;