import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Activity {
  id: number;
  name: string;
  completed: boolean;
}

interface ActivityItemProps {
  activity: Activity;
  onToggle: () => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.activityContainer}>
      <Text style={styles.activityText}>{activity.name}</Text>
      <View style={[styles.checkbox, activity.completed && styles.checked]}>
        {activity.completed && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: '#C5E5D0',
    backgroundColor:'#A8DFC9',
    borderRadius: 12,
    marginVertical: 6,
    marginHorizontal: 10,

    // shadows - different for iOS and Android
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow

  },
  activityText: {
    fontSize: 16,
    color: '#2C5D63',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#2C5D63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#2C5D63',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
});

export default ActivityItem;