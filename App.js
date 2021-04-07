import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Details from './components/Details';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createBottomTabNavigator();



const App = () => {

  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Details') {
          iconName = focused ? 'list-alt' : 'list-alt';
        }

        return <Icon name={iconName} size={25} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#d3d6dd',
      style: {
             backgroundColor: '#2c6979cc',
             paddingBottom: 15
       }
    }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Details" component={Details}  />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};



export default App;