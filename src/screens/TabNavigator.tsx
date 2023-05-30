import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Home';
import Konsultasi from './Konsultasi';

const Tab = createBottomTabNavigator();

const TabNavigator = (props: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontFamily: 'Poppins_500Medium',
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        children={() => <Home props={props} />}
        options={{
          tabBarIcon: HomeMenu,
        }}
      />
      <Tab.Screen
        name="Konsultasi"
        children={() => <Konsultasi props={props} />}
        options={{
          tabBarIcon: KonsultasiMenu,
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        children={() => <Profile props={props} />}
        options={{
          tabBarIcon: ProfileMenu,
        }}
      /> */}
    </Tab.Navigator>
  );
};

const HomeMenu = () => {
  return (
    <View style={styles.viewStyle}>
      <Icon name="home" type="ionicon" color="#2D5BD1" size={25} />
      <Text style={styles.textLabel}>HOME</Text>
    </View>
  );
};

const KonsultasiMenu = () => {
  return (
    <View style={styles.viewStyle}>
      <Icon name="chatbubbles-sharp" type="ionicon" color="#374151" size={25} />
      <Text style={styles.textLabel}>KONSULTASI</Text>
    </View>
  );
};

const ProfileMenu = () => {
  return (
    <View style={styles.viewStyle}>
      <Icon name="person" type="ionicon" color="#374151" size={25} />
      <Text style={styles.textLabel}>PROFILE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  viewStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    fontFamily: 'Poppins_Bold',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  textFocus: {
    paddingTop: 4,
    fontFamily: 'Poppins_SemiBold',
    fontSize: 8,
  },
  textNoFocus: {
    paddingTop: 4,
    fontFamily: 'Poppins_SemiBold',
    fontSize: 8,
  },
  textLabel: {
    fontFamily: 'Poppins_SemiBold',
    fontSize: 9,
    color: '#2D5BD1',
  },
});

export default TabNavigator;
