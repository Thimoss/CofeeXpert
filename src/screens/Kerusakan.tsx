import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Layout from '../components/Layout';

const Kerusakan = (props: any) => {
  return (
    <Layout titleBar title="Daftar Kerusakan">
      <View style={styles.contentView}>
        <ScrollView>
          <View style={styles.viewText}>
            <Image
              source={require('../../assets/image/Book.png')}
              style={{ height: 201, width: 170 }}
            />
          </View>

          {/* Tulisan */}
          <View style={{ gap: 20, paddingTop: 20, paddingBottom: 100 }}>
            {/* 1 */}
            <View>
              <Text style={styles.title}>Tombol On/Off tidak tertekan</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Mesin tidak menyala{'\n'}
                2.Mesin tidak mengeluarkan kopi{'\n'}
                3.Lampu idikator mesin tidak hidup
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>1.Mengaktifkan ulang tombol On/Off</Text>
            </View>

            {/* 2 */}
            <View>
              <Text style={styles.title}>Sumber kabel konslet</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Mesin tidak menyala{'\n'}
                2.Mesin tidak mengeluarkan kopi{'\n'}
                3.Terdapat aroma kabel terbakar
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Perbaiki Sumber kabel yang konslet {'\n'}
                2.Mengaktifkan ulang tombol On/Off {'\n'}
                3.Aktifkan pembersihan mesin otomatis
              </Text>
            </View>

            {/* 3 */}
            <View>
              <Text style={styles.title}>Mesin panas</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Mesin tidak menyala{'\n'}
                2.Mesin tidak mengeluarkan kopi{'\n'}
                3.Air tidak keluar saat awal mesin dihidupkan
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Matikan mesin untuk mendinginkan mesin {'\n'}
                2.Mengaktifkan ulang tombol On/Off
              </Text>
            </View>

            {/* 4 */}
            <View>
              <Text style={styles.title}>Biji kopi terlalu penuh atau terlalu padat</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Mesin tidak mengeluarkan kopi {'\n'}
                2.Mesin mengeluarkan kopi namun lambat{'\n'}
                3.Mesin berbunyi keras
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Kurangi biji kopi pada mesin {'\n'}
                2.Gunakan kopi yang bekuliatas dan tidak terlalu kering
              </Text>
            </View>

            {/* 5 */}
            <View>
              <Text style={styles.title}>Pompa rusak/ Air pada pemasok air habis</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Mesin tidak mengeluarkan kopi{'\n'}
                2.Mesin mengeluarkan kopi namun lambat{'\n'}
                3.Air tidak keluar saat awal mesin dihidupkan
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Perbaiki pompa dengan teknisi {'\n'}
                2.Bongkar mesin dan bersikan saluran air {'\n'}
                3.Isi ulang air
              </Text>
            </View>

            {/* 6 */}
            <View>
              <Text style={styles.title}>Saluran air tersumbat</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Mesin tidak mengeluarkan kopi{'\n'}
                2.Mesin mengeluarkan kopi namun lambat{'\n'}
                3.Terdapat aroma tidak sedap
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Bongkar mesin dan bersihkan saluran air {'\n'}
                2.Isi ulang air{'\n'}
                3.Aktifkan pembersihan mesin otomatis{'\n'}
                4.Bersikan bagian pembuangan
              </Text>
            </View>

            {/* 7 */}
            <View>
              <Text style={styles.title}>Gilingan kopi yang masih kasar</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Kopi terlalu cepat keluar{'\n'}
                2.Mesin berbunyi keras{'\n'}
                3.rasa kopi kurang enak
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Gunakan kopi yang bekuliatas dan tidak terlalu kering {'\n'}
                2.Ganti filter
              </Text>
            </View>

            {/* 8 */}
            <View>
              <Text style={styles.title}>Filter sudah tua</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Kopi bocor, sehingga butiran kopi keluar di portfilter{'\n'}
                2.Terdapat genangan air kotor pada bagian bawah mesin{'\n'}
                3.rasa kopi kurang enak
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Ganti filter {'\n'}
                2.Bersikan bagian pembuangan {'\n'}
                3.Gunakan kopi yang bekuliatas dan tidak terlalu kering
              </Text>
            </View>

            {/* 9 */}
            <View>
              <Text style={styles.title}>Selang bocor</Text>
              <Text style={styles.subTitleText}>Ciri-ciri kerusakan:</Text>
              <Text style={styles.text}>
                1.Terdapat genangan air kotor pada bagian bawah mesin{'\n'}
                2.Terdapat genangan air bersih pada bagian bawah mesin{'\n'}
                3.Air tidak keluar saat awal mesin dihidupkan
              </Text>
              <Text style={styles.subTitleText}>Solusi:</Text>
              <Text style={styles.text}>
                1.Perbaiki pompa dengan teknisi {'\n'}
                2.Bongkar mesin dan bersikan saluran air {'\n'}
                3.Bersikan bagian pembuangan{'\n'}
                4.Lakukan pembersihan lutin pada mesin
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Kerusakan;

const styles = StyleSheet.create({
  subTitleText: {
    fontFamily: 'Poppins_SemiBold',
    fontSize: 16,
    paddingHorizontal: 8,
  },
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
    paddingHorizontal: 16,
    paddingVertical: 2,
    textAlign: 'justify',
    flex: 1,
  },
  text1: {
    fontFamily: 'Poppins_Regular',
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: 'justify',
    flex: 1,
    marginBottom: 30,
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
