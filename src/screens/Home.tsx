import { Icon } from '@rneui/base';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Layout from '../components/Layout';

const Home = (props: any) => {
  return (
    <Layout titleBar title="Home">
      <View style={styles.contentView}>
        <ScrollView>
          <View
            style={{
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flex: 1,
            }}>
            <Image
              source={require('../../assets/image/Machine.png')}
              style={{ height: 210, width: 200 }}
            />
          </View>

          {/* Tulisan */}
          <View style={{ gap: 20 }}>
            <View>
              <Text style={styles.title}>Apa Itu Mesin Kopi?</Text>
              <Text style={styles.text}>
                Mesin kopi adalah perangkat atau alat yang dirancang khusus untuk menghasilkan
                minuman kopi dengan cara yang efisien dan praktis. Mesin kopi modern dapat
                menghasilkan berbagai jenis kopi, seperti espresso, cappuccino, latte, dan banyak
                lagi. Mesin ini sangat populer di rumah, kafe, restoran, dan tempat kerja.
              </Text>
            </View>

            {/* Jenis-Jenis Kerusakan */}
            <View>
              <Text style={styles.title}>Jenis-Jenis Kerusakan</Text>
              <TouchableOpacity style={styles.viewRow}>
                <Text style={styles.text}>
                  Terdapat beberapa kerusakan yang sering terjadi. Klik untuk melihat selengkapnya.
                </Text>
                <Icon name="chevron-forward" type="ionicon" color="#374151" size={20} />
              </TouchableOpacity>
            </View>
            {/* Ciri-Ciri Kerusakan */}
            <View>
              <Text style={styles.title}>Ciri-Ciri Kerusakan</Text>
              <TouchableOpacity style={styles.viewRow}>
                <Text style={styles.text}>
                  Terdapat beberapa ciri-ciri kerusakan yang sering terjadi. Klik untuk melihat
                  selengkapnya.
                </Text>
                <Icon name="chevron-forward" type="ionicon" color="#374151" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    gap: 4,
  },
  text: {
    fontFamily: 'Poppins_Regular',
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: 'justify',
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins_Bold',
    fontSize: 20,
    color: '#2D5BD1',
  },
  contentView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
