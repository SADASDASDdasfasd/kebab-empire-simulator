import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useGameStore } from '../store/useGameStore';

export default function KitchenScreen() {
  const { addMoney, money } = useGameStore();
  const handleSlice = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    addMoney(12);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍖 Kebab Empire</Text>
      <Text style={styles.money}>💰 ${money}</Text>
      <Pressable onPress={handleSlice} style={styles.sliceButton}>
        <Text style={styles.sliceText}>SLICE MEAT 🔥</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 42, color: '#FF6B00', fontWeight: 'bold', marginBottom: 20 },
  money: { fontSize: 28, color: '#4ade80', marginBottom: 60 },
  sliceButton: { backgroundColor: '#c2410c', paddingHorizontal: 60, paddingVertical: 30, borderRadius: 999, marginTop: 30 },
  sliceText: { color: 'white', fontSize: 24, fontWeight: 'bold' }
});
