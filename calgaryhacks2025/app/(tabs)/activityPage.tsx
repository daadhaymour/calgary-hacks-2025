import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import ActivityItem from './ActivityItem';
import Footer from './Footer';

interface Activity {
  id: number;
  name: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, name: 'Take a nature photo', completed: false },
    { id: 2, name: 'Spot a bird', completed: false },
    { id: 3, name: 'Pick up trash', completed: false },
    { id: 4, name: 'Hike near the mountains', completed: false },
    { id: 5, name: 'Visit Lake Louise', completed: false },
  ]);

  const toggleActivity = (id: number) => {
    setActivities(activities.map(activity =>
      activity.id === id
        ? { ...activity, completed: !activity.completed }
        : activity
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header parkName="Banff National Park" score={100} />
      <ScrollView style={styles.scrollView}>
        {activities.map(activity => (
          <ActivityItem
            key={activity.id}
            activity={activity}  // Pass entire activity object
            onToggle={() => toggleActivity(activity.id)}
          />
        ))}
      </ScrollView>
      <Footer
        onProfilePress={() => console.log('Profile pressed')}
        onCompassPress={() => console.log('Compass pressed')}
        onCallPress={() => console.log('Call pressed')}
        onCartPress={() => console.log('Cart pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
});

export default App;