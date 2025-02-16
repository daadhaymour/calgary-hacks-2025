import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  parkName: string;
  score: number;
}

const Header: React.FC<HeaderProps> = ({ parkName, score }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.parkName}>{parkName}</Text>
      <View style={styles.scoreContainer}>
        <Text>🌿</Text>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: '#B4D6E3',
    backgroundColor: '#8FB0C4',
    borderRadius: 12,
    margin: 10,
  },
  parkName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C5D63',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
  },
  scoreText: {
    marginLeft: 4,
    fontWeight: '600',
  },
});

export default Header;
