import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MemberDetails = ({ route, navigation }) => {
  const { member } = route.params;

  return (
    <View style={styles.container}>
      {/* Imagem do membro (opcional) */}
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pela URL da imagem do membro, se houver
        style={styles.image}
      />
      <Text style={styles.title}>{member.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Idade: <Text style={styles.infoValue}>{member.age}</Text></Text>
        <Text style={styles.info}>Moto: <Text style={styles.infoValue}>{member.motorcycle}</Text></Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Círculo
    marginBottom: 20,
    borderColor: '#FFD700',
    borderWidth: 3,
  },
  title: {
    fontSize: 32,
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  info: {
    fontSize: 18,
    color: '#aaa',
    marginVertical: 5,
  },
  infoValue: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#444',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3, // Sombra para Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MemberDetails;



