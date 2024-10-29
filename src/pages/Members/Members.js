// src/pages/Members/Members.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import styles from './styles'; // Ajuste o caminho conforme necessário

const membersData = [
  { id: '1', name: 'João', age: 30, motorcycle: 'Harley Davidson' },
  { id: '2', name: 'Maria', age: 25, motorcycle: 'Ducati' },
  { id: '3', name: 'Carlos', age: 35, motorcycle: 'Yamaha' },
  // Adicione mais membros conforme necessário
];

const Members = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('MemberDetails', { member: item })}
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
    </View>
  );
};

export default Members;




