import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FooterProps {
  onProfilePress: () => void;
  onCompassPress: () => void;
  onCallPress: () => void;
  onCartPress: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onProfilePress,
  onCompassPress,
  onCallPress,
  onCartPress,
}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
        <Text>👤</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCompassPress} style={styles.iconButton}>
        <Text>🧭</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCallPress} style={styles.iconButton}>
        <Text>📞</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCartPress} style={styles.iconButton}>
        <Text>🛒</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#B4D6E3',
    padding: 16,
    borderRadius: 12,
    margin: 10,
  },
  iconButton: {
    padding: 8,
  },
});

export default Footer;
