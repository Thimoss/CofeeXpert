import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import Layout from '../components/Layout';
import ModalKendala from '../components/modalKendala/ModalKendala';

const Konsultasi = (props: any) => {
  const [modalKendala, setModalKendala] = useState(false);
  const [jenisKerusakan, setJenisKerusakan] = useState(undefined);
  const [persentaseKerusakan, setPersentaseKerusakan] = useState(undefined);
  const handleKerusakan = (jenisKerusakan, persentaseKerusakan) => {
    setJenisKerusakan(jenisKerusakan);
    setPersentaseKerusakan(persentaseKerusakan);
  };
  console.log('jenisKerusakan', { jenisKerusakan });
  const isKerusakanBelumDipastikan =
    jenisKerusakan && jenisKerusakan.length > 0 && jenisKerusakan[0].percentage <= 33;

  return (
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
          <View style={{ gap: 20, paddingTop: 20, paddingBottom: 100 }}>
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
                  Terdapat beberapa kerusakan yang sering terjadi. Klik untuk melihat selengkapnya.
                </Text>
                <Icon name="chevron-down" type="ionicon" color="#374151" size={20} />
              </TouchableOpacity>
            </View>

            {/* Ciri-Ciri Kerusakan */}
            <View>
              <Text style={styles.title}>Kerusakan Yang Diperkirakan</Text>

              <Text style={styles.text}>
                Berdasarkan kendala yang kamu berikan, bisa kami simpulkan kemungkinkan kendala yang
                kamu alami adalah:
              </Text>
              <View style={styles.text}>
                <Text style={styles.text}>Jenis Kerusakan:</Text>
                {jenisKerusakan && jenisKerusakan.length > 0 ? (
                  <>
                    {isKerusakanBelumDipastikan ? (
                      <View>
                        <Text style={styles.text}>1. Kerusakan belum bisa dipastikan</Text>
                        <Text style={styles.text}>Persentase Kerusakan: 33%</Text>
                      </View>
                    ) : (
                      jenisKerusakan.map((kerusakan, index) => {
                        return (
                          <View key={index}>
                            <Text style={styles.text}>
                              {index + 1}. {kerusakan.diagnosis}
                            </Text>
                            <Text style={styles.text}>
                              Persentase Kerusakan: {kerusakan.percentage}%
                            </Text>
                            {kerusakan.percentage === 100 && (
                              <Text style={styles.text}>
                                Kesimpulan: Mesin kopi rusak karena {kerusakan.diagnosis}
                              </Text>
                            )}
                          </View>
                        );
                      })
                    )}
                  </>
                ) : (
                  <View>
                    <Text style={styles.text}>1. Kerusakan belum bisa dipastikan</Text>
                    <Text style={styles.text}>Persentase Kerusakan: 33%</Text>
                  </View>
                )}
              </View>
            </View>
          </View>

          <ModalKendala
            modalKendalaVisible={modalKendala}
            setModalKendala={setModalKendala}
            handleKerusakan={handleKerusakan}
          />
        </ScrollView>
      </View>
    </Layout>
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
