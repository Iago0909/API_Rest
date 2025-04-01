import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Função para simular a obtenção de uma foto de perfil aleatória
const getRandomAvatar = () => {
  const avatars = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar os dados');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image source={{ uri: getRandomAvatar() }} style={styles.avatar} />
                <Text style={styles.username}>Usuário #{item.userId}</Text>
              </View>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskStatus}>{item.completed ? 'Completo' : 'Pendente'}</Text>
              <View style={styles.footer}>
                <TouchableOpacity style={styles.commentButton}>
                  <Text style={styles.commentText}>Comentar</Text>
                </TouchableOpacity>
                <Text style={styles.dateText}>Há 5 minutos</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  taskStatus: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentButton: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  commentText: {
    color: '#fff',
    fontSize: 14,
  },
  dateText: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default TodosList;
