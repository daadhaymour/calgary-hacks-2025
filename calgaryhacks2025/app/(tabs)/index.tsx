// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


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
    { id: 4, name: 'Find a unique leaf', completed: false },
    { id: 5, name: 'Walk 1000 steps', completed: false },
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
      <Header parkName="Central Park" score={100} />
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
