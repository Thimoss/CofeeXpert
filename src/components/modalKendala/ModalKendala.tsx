import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Modal, StyleSheet, Text, View } from 'react-native';

const ModalKendala = ({ modalKendalaVisible, setModalKendala, handleKerusakan }) => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [jenisKerusakan, setJenisKerusakan] = useState([]);
  const [persentaseKerusakan, setPersentaseKerusakan] = useState(0);

  const handleButtonPress = (buttonIndex) => {
    if (selectedButtons.includes(buttonIndex)) {
      setSelectedButtons(selectedButtons.filter((index) => index !== buttonIndex));
    } else {
      if (selectedButtons.length < 3) {
        setSelectedButtons([...selectedButtons, buttonIndex]);
      }
    }
  };

  useEffect(() => {
    const checkKerusakan = () => {
      let totalPersentase = 0;
      const kerusakan = [];
      // pertama
      if (
        selectedButtons.includes(0) &&
        selectedButtons.includes(1) &&
        selectedButtons.includes(7)
      ) {
        // kerusakan.push( {diagnosis:'Tombol On/Off tidak tertekan');
        kerusakan.push({ diagnosis: 'Tombol On/Off tidak tertekan', percentage: 100 });
        // totalPersentase += 100;
      } else if (
        (selectedButtons.includes(0) && selectedButtons.includes(1)) ||
        (selectedButtons.includes(0) && selectedButtons.includes(7)) ||
        (selectedButtons.includes(1) && selectedButtons.includes(7))
      ) {
        kerusakan.push({
          diagnosis: 'Kerusakan Mungkin terletak pada Tombol On/Off tidak tertekan',
          percentage: 77,
        });
      } else if (selectedButtons.length === 1) {
        kerusakan.push({
          diagnosis: 'Kerusakan belum bisa dipastikan',
          percentage: 33,
        });
      }
      if (
        selectedButtons.includes(0) &&
        selectedButtons.includes(1) &&
        selectedButtons.includes(11)
      ) {
        kerusakan.push({
          diagnosis: 'Sumber kabel konslet',
          percentage: 100,
        });
      } else if (
        (selectedButtons.includes(0) && selectedButtons.includes(1)) ||
        (selectedButtons.includes(0) && selectedButtons.includes(11)) ||
        (selectedButtons.includes(1) && selectedButtons.includes(11))
      ) {
        kerusakan.push({
          diagnosis: 'Kerusakan Mungkin terletak Sumber kabel konslet',
          percentage: 77,
        });
      } else if (selectedButtons.length === 1) {
        kerusakan.push({
          diagnosis: 'Kerusakan belum bisa dipastikan',
          percentage: 33,
        });
      }

      if (
        selectedButtons.includes(0) &&
        selectedButtons.includes(2) &&
        selectedButtons.includes(9)
      ) {
        kerusakan.push({ diagnosis: 'Mesin panas', percentage: 100 });
        totalPersentase += 100;
      } else if (
        (selectedButtons.includes(0) && selectedButtons.includes(2)) ||
        (selectedButtons.includes(0) && selectedButtons.includes(9)) ||
        (selectedButtons.includes(2) && selectedButtons.includes(9))
      ) {
        kerusakan.push({ diagnosis: 'Kerusakan Mungkin karena Mesin panas', percentage: 77 });
      } else if (selectedButtons.length === 1) {
        kerusakan.push({ diagnosis: 'Kerusakan belum bisa dipastikan', percentage: 33 });
        totalPersentase += 0;
      }

      if (
        selectedButtons.includes(1) &&
        selectedButtons.includes(2) &&
        selectedButtons.includes(8)
      ) {
        kerusakan.push({ diagnosis: 'Biji kopi kepenuhan atau terlalu padat', percentage: 100 });
        totalPersentase += 100;
      } else if (
        (selectedButtons.includes(1) && selectedButtons.includes(2)) ||
        (selectedButtons.includes(1) && selectedButtons.includes(8)) ||
        (selectedButtons.includes(2) && selectedButtons.includes(8))
      ) {
        kerusakan.push({
          diagnosis: 'Kerusakan Mungkin Karena Biji kopi kepenuhan atau terlalu padat',
          percentage: 77,
        });
        totalPersentase += 77;
      } else if (selectedButtons.length === 1) {
        kerusakan.push({ diagnosis: 'Kerusakan belum bisa dipastikan', percentage: 33 });
        totalPersentase += 0;
      }

      if (
        selectedButtons.includes(1) &&
        selectedButtons.includes(2) &&
        selectedButtons.includes(9)
      ) {
        kerusakan.push({ diagnosis: 'Pompa rusak / Air pada pemasok air habis', percentage: 100 });
        totalPersentase += 100;
      } else if (
        (selectedButtons.includes(1) && selectedButtons.includes(2)) ||
        (selectedButtons.includes(1) && selectedButtons.includes(9)) ||
        (selectedButtons.includes(2) && selectedButtons.includes(9))
      ) {
        kerusakan.push({
          diagnosis: 'Kerusakan Mungkin Karena Pompa rusak / Air pada pemasok air habis',
          percentage: 77,
        });
        totalPersentase += 77;
      } else if (selectedButtons.length === 1) {
        kerusakan.push({ diagnosis: 'Kerusakan belum bisa dipastikan', percentage: 33 });
        totalPersentase += 0;
      }

      if (
        selectedButtons.includes(1) &&
        selectedButtons.includes(2) &&
        selectedButtons.includes(12)
      ) {
        kerusakan.push({ diagnosis: 'Saluran air tersumbat', percentage: 100 });
        totalPersentase += 100;
      } else if (
        (selectedButtons.includes(1) && selectedButtons.includes(2)) ||
        (selectedButtons.includes(1) && selectedButtons.includes(12)) ||
        (selectedButtons.includes(2) && selectedButtons.includes(12))
      ) {
        kerusakan.push({
          diagnosis: 'Kerusakan Mungkin Karena Saluran air tersumbat',
          percentage: 77,
        });
        totalPersentase += 77;
      } else if (selectedButtons.length === 1) {
        kerusakan.push({ diagnosis: 'Kerusakan belum bisa dipastikan', percentage: 33 });
        totalPersentase += 0;
      }

      if (
        selectedButtons.includes(3) &&
        selectedButtons.includes(8) &&
        selectedButtons.includes(11)
      ) {
        kerusakan.push({ diagnosis: 'Gilingan kopi yang masih kasar', percentage: 100 });
        totalPersentase += 100;
      } else if (
        (selectedButtons.includes(3) && selectedButtons.includes(8)) ||
        (selectedButtons.includes(3) && selectedButtons.includes(11)) ||
        (selectedButtons.includes(8) && selectedButtons.includes(11))
      ) {
        kerusakan.push({
          diagnosis: 'Kerusakan Mungkin Karena Gilingan kopi yang masih kasar',
          percentage: 77,
        });
        totalPersentase += 77;
      } else if (selectedButtons.length === 1) {
        kerusakan.push({ diagnosis: 'Kerusakan belum bisa dipastikan', percentage: 33 });
        totalPersentase += 0;
      }

      if (
        selectedButtons.includes(4) &&
        selectedButtons.includes(5) &&
        selectedButtons.includes(10)
      ) {
        kerusakan.push({ diagnosis: 'Filter sudah tua', percentage: 100 });
        totalPersentase += 100;
      } else if (
        (selectedButtons.includes(4) && selectedButtons.includes(5)) ||
        (selectedButtons.includes(4) && selectedButtons.includes(10)) ||
        (selectedButtons.includes(5) && selectedButtons.includes(10))
      ) {
        kerusakan.push({ diagnosis: 'Kerusakan Mungkin Karena Filter sudah tua', percentage: 77 });
        totalPersentase += 77;
      } else if (selectedButtons.length === 1) {
        kerusakan.push({ diagnosis: 'Kerusakan belum bisa dipastikan', percentage: 33 });
        totalPersentase += 0;
      }

      if (
        selectedButtons.includes(6) &&
        selectedButtons.includes(7) &&
        selectedButtons.includes(9)
      ) {
        kerusakan.push({ diagnosis: 'Selang bocor', percentage: 100 });
        totalPersentase += 100;
      } else if (
        (selectedButtons.includes(6) && selectedButtons.includes(7)) ||
        (selectedButtons.includes(4) && selectedButtons.includes(11)) ||
        (selectedButtons.includes(6) && selectedButtons.includes(11))
      ) {
        kerusakan.push({ diagnosis: 'Kerusakan Mungkin Karena Filter sudah tua', percentage: 77 });
        totalPersentase += 77;
      } else if (selectedButtons.length === 1) {
        kerusakan.push({ diagnosis: 'Kerusakan belum bisa dipastikan', percentage: 33 });
        totalPersentase += 0;
      }
      setJenisKerusakan(kerusakan);
      setPersentaseKerusakan(totalPersentase);
    };

    checkKerusakan();
  }, [selectedButtons]);

  const handleKonfirmasi = () => {
    if (jenisKerusakan) {
      handleKerusakan(jenisKerusakan, persentaseKerusakan);
    } else {
      handleKerusakan('', 0);
    }
    setModalKendala(false);
  };

  console.log('selectedButtons', jenisKerusakan);
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
              {buttonData.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={selectedButtons.includes(index) ? styles.viewRow : styles.viewRow1}
                  onPress={() => handleButtonPress(index)}>
                  <Text
                    style={
                      selectedButtons.includes(index) ? styles.textChoice : styles.textChoice1
                    }>
                    {index + 1}.{button.label}
                  </Text>
                </TouchableOpacity>
              ))}
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

const buttonData = [
  { label: 'Mesin Tidak Menyala' },
  { label: 'Mesin Tidak Mengeluarkan Kopi' },
  { label: 'Mesin mengeluarkan kopi Namun Lambat' },
  { label: 'Kopi Terlalu Cepat Keluar' },
  { label: 'Kopi Bocor, Sehingga Butiran Kopi Keluar Di Portfilter' },
  { label: 'Terdapat Genangan Air Kotor Pada Bagian Bawah Mesin' },
  { label: 'Terdapat Genangan Air Bersih Pada Bagian Bawah Mesin' },
  { label: 'Lampu Indikator Mesin Tidak Hidup' },
  { label: 'Mesin Berbunyi Keras' },
  { label: 'Air Tidak Keluar Saat Awal Mesin Dihidupkan' },
  { label: 'Rasa Kopi Kurang Enak' },
  { label: 'Terdapat Aroma Kabel Terbakar' },
  { label: 'Terdapat Aroma Tidak Sedap' },
];

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
  kerusakanContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  textKerusakan: {
    fontFamily: 'Poppins_SemiBold',
    fontSize: 16,
  },
  textPersentase: {
    fontFamily: 'Poppins_Regular',
    fontSize: 14,
    marginTop: 8,
  },
});
