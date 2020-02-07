import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ListItem({item, completeItem}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => completeItem(item.id)}>
        <Text style={[styles.title, {textDecorationLine: item.completed ? 'line-through' : 'none'}]}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    color: '#666',
  },
});
