import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const [length, setLength] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [savedPasswords, setSavedPasswords] = useState([]);

  useEffect(() => {
    loadPasswords();
  }, []);

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let newPassword = '';
    for (let i = 0; i < parseInt(length); i++) {
      const index = Math.floor(Math.random() * chars.length);
      newPassword += chars.charAt(index);
    }
    setPassword(newPassword);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(password);
    Alert.alert('Copiado!', 'Senha copiada para a área de transferência!');
  };

  const savePassword = async () => {
    if (!name || !password) {
      Alert.alert('Erro', 'Preencha o nome e gere a senha primeiro!');
      return;
    }

    const newEntry = { name, password };
    const updatedList = [...savedPasswords, newEntry];
    setSavedPasswords(updatedList);

    await SecureStore.setItemAsync('passwords', JSON.stringify(updatedList));
    setName('');
    setPassword('');
    setLength('');
  };

  const loadPasswords = async () => {
    const data = await SecureStore.getItemAsync('passwords');
    if (data) {
      setSavedPasswords(JSON.parse(data));
    }
  };

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome da senha (ex: Email)"
        placeholderTextColor="#ddd"
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={length}
        onChangeText={setLength}
        placeholder="Comprimento da senha"
        placeholderTextColor="#ddd"
      />

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <>
          <Text style={styles.password}>{password}</Text>

          <TouchableOpacity style={[styles.button, styles.copyButton]} onPress={copyToClipboard}>
            <Text style={styles.buttonText}>Copiar Senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={savePassword}>
            <Text style={styles.buttonText}>Salvar Senha</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.subtitle}>Senhas Salvas:</Text>
      <FlatList
        data={savedPasswords}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemName}>🔒 {item.name}</Text>
            <Text style={styles.itemPassword}>{item.password}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'System',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  button: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 14,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  copyButton: {
    backgroundColor: '#4ecdc4',
    shadowColor: '#4ecdc4',
  },
  saveButton: {
    backgroundColor: '#1a535c',
    shadowColor: '#1a535c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
  },
  password: {
    fontSize: 20,
    color: '#ffe66d',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Courier New',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    paddingBottom: 6,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
  },
  itemPassword: {
    fontSize: 16,
    color: '#ffe66d',
    fontFamily: 'Courier New',
    letterSpacing: 1.2,
  },
});
