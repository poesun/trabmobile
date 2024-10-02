import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import styles from './styles'; // ajustado para o local correto

const membersData = [
  { id: '1', name: 'João', age: 30, motorcycle: 'Harley Davidson' },
  { id: '2', name: 'Maria', age: 25, motorcycle: 'Ducati' },
  { id: '3', name: 'Carlos', age: 35, motorcycle: 'Yamaha' },
  // Adicione mais membros conforme necessário
];

const Members = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => {
        setSelectedMember(item);
        setModalVisible(true);
      }}
    >
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={membersData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {selectedMember && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            setSelectedMember(null);
          }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Nome: {selectedMember.name}</Text>
            <Text style={styles.modalText}>Idade: {selectedMember.age}</Text>
            <Text style={styles.modalText}>Moto: {selectedMember.motorcycle}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedMember(null);
              }}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Members;

