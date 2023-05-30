import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

const ModalKendala = ({ modalKendalaVisible, setModalKendala }) => {
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
          <Text style={styles.text}>Modal Kendala</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalKendala;

const styles = StyleSheet.create({
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
