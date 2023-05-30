import { Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  titleBar?: boolean;
  title?: string;
  notification?: boolean;
  navigation?: any;
  back?: boolean;
};

const Layout = ({ children, style, titleBar, title, notification, navigation, back }: Props) => {
  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };
  return (
    <View style={[styles.layout, style]}>
      {titleBar ? (
        <View style={styles.titleBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ alignItems: 'flex-start' }}>
                <Icon
                  name="chevron-left"
                  size={36}
                  type="entypo"
                  color={'white'}
                  style={{ paddingRight: 8 }}
                />
              </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
          </View>

          {notification && (
            <Icon
              name="notifications-circle-outline"
              type="ionicon"
              color="#FFFFFF"
              size={36}
              onPress={handleNotifications}
            />
          )}
        </View>
      ) : (
        <>
          {back && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ alignItems: 'flex-start' }}>
              <Icon
                name="chevron-left"
                size={36}
                type="entypo"
                color={'white'}
                style={{ paddingRight: 8 }}
              />
            </TouchableOpacity>
          )}
        </>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#2D5BD1',
    paddingTop: 40,
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Poppins_Bold',
    textAlign: 'center',
  },
});

export default Layout;
