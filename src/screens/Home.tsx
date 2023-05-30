import { Icon } from '@rneui/base';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Layout from '../components/Layout';

const Home = (props: any) => {
  console.log(props.props.navigation);
  return (
    <Layout titleBar title="Home">
      <View style={styles.contentView}>
        <ScrollView>
          <View style={styles.viewText}>
            <Image
              source={require('../../assets/image/Machine.png')}
              style={{ height: 210, width: 200 }}
            />
          </View>

          {/* Tulisan */}
          <View style={{ gap: 20, flex: 1, paddingBottom: 60 }}>
            <View>
              <Text style={styles.title}>CofeeXpert</Text>
              <Text style={styles.text}>
                CofeeXPert adalah aplikasi sistem pakar yang menghadirkan solusi cepat dan akurat
                untuk menganalisis dan memperbaiki kerusakan pada mesin kopi. Dengan basis
                pengetahuan yang luas dan kecerdasan buatan yang canggih, CofeeXPert memungkinkan
                pengguna untuk mengidentifikasi masalah pada mesin kopi mereka dan memberikan solusi
                yang tepat secara mandiri. Dengan panduan perbaikan yang disesuaikan, pengguna dapat
                menghemat waktu dan biaya yang mungkin dikeluarkan untuk memanggil teknisi atau
                membawa mesin kopi ke pusat perbaikan, serta menikmati pengalaman menggunakan mesin
                kopi yang lebih lancar dan terhindar dari kerusakan.
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Apa Itu Mesin Kopi?</Text>
              <Text style={styles.text}>
                Mesin kopi adalah perangkat atau alat yang dirancang khusus untuk menghasilkan
                minuman kopi dengan cara yang efisien dan praktis. Mesin kopi modern dapat
                menghasilkan berbagai jenis kopi, seperti espresso, cappuccino, latte, dan banyak
                lagi. Mesin ini sangat populer di rumah, kafe, restoran, dan tempat kerja.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewText: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
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
