import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute', // Makes it float
        backgroundColor: '#8FB0C4', // Solid light blue color (adjust as needed)
        borderRadius: 30, // Rounded edges
        marginHorizontal: 20, // Adds spacing from the sides
        marginBottom: 10, // Slightly raises the tab bar
        height: 65, // Adjusted height for a better look
        borderTopWidth: 0, // Removes default border line
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="user.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="compass.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="1"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="world.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="2"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
