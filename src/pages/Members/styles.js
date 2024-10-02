import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
  modalView: {
    width: 250, // Defina a largura do modal
    height: 250, // Defina a altura do modal
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    margin: 0, // Remova a margem
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute', // Posiciona o modal como absoluto
    top: '50%', // Centraliza verticalmente
    left: '50%', // Centraliza horizontalmente
    transform: [{ translateX: -125 }, { translateY: -125 }], // Ajusta o centro do modal
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;



