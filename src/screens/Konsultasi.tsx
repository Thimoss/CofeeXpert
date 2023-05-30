import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

import Layout from '../components/Layout';
import ModalKendala from '../components/modalKendala/ModalKendala';

const Konsultasi = (props: any) => {
  const [modalKendala, setModalKendala] = useState(false);

  const handleKendala = () => {
    alert('ini alert');
  };

  return (
    <>
      <Layout titleBar title="Konsultasi">
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
                source={require('../../assets/image/Konsultasi.png')}
                style={{ height: 201, width: 202 }}
              />
            </View>

            {/* Tulisan */}
            <View style={{ gap: 20, paddingTop: 20 }}>
              <View>
                <Text style={styles.title}>Mesin Kopi Kamu Mengalami Kendala?</Text>
                <Text style={styles.text}>
                  Silahkan beri tahu kami ciri-ciri yang mesin kopi kamu alami. Kami akan berusaha
                  membantu
                </Text>
              </View>

              {/* Jenis-Jenis Kerusakan */}
              <View>
                <Text style={styles.title}>Pilih Kendala</Text>
                <TouchableOpacity style={styles.viewRow} onPress={() => setModalKendala(true)}>
                  <Text style={styles.text}>
                    Terdapat beberapa kerusakan yang sering terjadi. Klik untuk melihat
                    selengkapnya.
                  </Text>
                  <Icon name="chevron-down" type="ionicon" color="#374151" size={20} />
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
            <ModalKendala modalKendalaVisible={modalKendala} setModalKendala={setModalKendala} />
          </ScrollView>
        </View>
      </Layout>
    </>
  );
};

export default Konsultasi;

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
