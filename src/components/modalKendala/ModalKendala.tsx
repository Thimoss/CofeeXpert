import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Modal, StyleSheet, Text, View } from 'react-native';

const ModalKendala = ({ modalKendalaVisible, setModalKendala }) => {
  const [k1, setK1] = useState(0);
  const [k2, setK2] = useState(0);
  const [k3, setK3] = useState(0);
  const [k4, setK4] = useState(0);
  const [k5, setK5] = useState(0);
  const [k6, setK6] = useState(0);
  const [k7, setK7] = useState(0);
  const [k8, setK8] = useState(0);
  const [k9, setK9] = useState(0);
  const [k10, setK10] = useState(0);
  const [k11, setK11] = useState(0);
  const [k12, setK12] = useState(0);
  const [k13, setK13] = useState(0);

  const handleKonfirmasi = () => {
    setModalKendala(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalKendalaVisible}
      onRequestClose={() => {
        setModalKendala(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.text}>Kendala yang dialami</Text>
          </View>
          <View style={{ gap: 8, height: 400, paddingVertical: 20 }}>
            <ScrollView>
              <TouchableOpacity
                style={k1 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK1((prevK1: number) => (prevK1 & 1 ? prevK1 - 1 : prevK1 + 1))}>
                <Text style={k1 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Mesin Tidak Menyala
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k2 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK2((prevK2: number) => (prevK2 & 1 ? prevK2 - 1 : prevK2 + 1))}>
                <Text style={k2 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Mesin Tidak Mengeluarkan Kopi
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k3 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK3((prevK3: number) => (prevK3 & 1 ? prevK3 - 1 : prevK3 + 1))}>
                <Text style={k3 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Mesin mengeluarkan kopi Namun Lambat
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k4 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK4((prevK4: number) => (prevK4 & 1 ? prevK4 - 1 : prevK4 + 1))}>
                <Text style={k4 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Kopi Terlalu Cepat Keluar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k5 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK5((prevK5: number) => (prevK5 & 1 ? prevK5 - 1 : prevK5 + 1))}>
                <Text style={k5 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Kopi Bocor, Sehingga Butiran Kopi Keluar Di Portfilter
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k6 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK6((prevK6: number) => (prevK6 & 1 ? prevK6 - 1 : prevK6 + 1))}>
                <Text style={k6 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Terdapat Genangan Air Kotor Pada Bagian Bawah Mesin
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k7 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK7((prevK7: number) => (prevK7 & 1 ? prevK7 - 1 : prevK7 + 1))}>
                <Text style={k7 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Terdapat Genangan Air Bersih Pada Bagian Bawah Mesin
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k8 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK8((prevK8: number) => (prevK8 & 1 ? prevK8 - 1 : prevK8 + 1))}>
                <Text style={k8 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Lampu Indikator Mesin Tidak Hidup
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k9 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() => setK9((prevK9: number) => (prevK9 & 1 ? prevK9 - 1 : prevK9 + 1))}>
                <Text style={k9 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Mesin Berbunyi Keras
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k10 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() =>
                  setK10((prevK10: number) => (prevK10 & 1 ? prevK10 - 1 : prevK10 + 1))
                }>
                <Text style={k10 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Air Tidak Keluar Saat Awal Mesin Dihidupkan
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k11 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() =>
                  setK11((prevK11: number) => (prevK11 & 1 ? prevK11 - 1 : prevK11 + 1))
                }>
                <Text style={k11 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Rasa Kopi Kurang Enak
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k12 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() =>
                  setK12((prevK12: number) => (prevK12 & 1 ? prevK12 - 1 : prevK12 + 1))
                }>
                <Text style={k12 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Terdapat Aroma Kabel Terbakar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={k13 & 1 ? [styles.viewRow] : [styles.viewRow1]}
                onPress={() =>
                  setK13((prevK13: number) => (prevK13 & 1 ? prevK13 - 1 : prevK13 + 1))
                }>
                <Text style={k13 & 1 ? [styles.textChoice] : [styles.textChoice1]}>
                  Terdapat Aroma Tidak Sedap
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleKonfirmasi}>
            <Text style={styles.textKonfirmasi}>Konfirmasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalKendala;

const styles = StyleSheet.create({
  textKonfirmasi: {
    fontFamily: 'Poppins_Bold',
    fontSize: 18,
    color: '#ffffff',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D5BD1',
    paddingVertical: 8,
    borderRadius: 10,
  },
  viewRow1: {
    paddingVertical: 4,
    marginVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  viewRow: {
    paddingVertical: 4,
    marginVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,

    backgroundColor: '#2D5BD1',
  },
  textChoice1: {
    fontFamily: 'Poppins_Regular',
  },
  textChoice: {
    fontFamily: 'Poppins_Regular',
    color: '#ffffff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontFamily: 'Poppins_SemiBold',
    fontSize: 14,
  },
});
