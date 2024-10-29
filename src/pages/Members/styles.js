// src/pages/Members/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#1E1E1E', // Cor de fundo mais escura
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#2E2E2E', // Um tom mais claro para os itens
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Dourado para o nome
  },
  // Outros estilos...
});

export default styles;






