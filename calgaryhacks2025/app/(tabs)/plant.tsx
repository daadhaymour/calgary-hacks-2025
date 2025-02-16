import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from 'react';

import { PixelRatio } from 'react-native';



const imageSize = PixelRatio.getPixelSizeForLayoutSize(100); 


const waterIcon = require('../../assets/images/water_icon.png');
const sunIcon = require('../../assets/images/sun_icon.png');
const fertilizerIcon = require('../../assets/images/fertilizer_icon.png');

const plant1 = require('../../assets/images/plant1.png');

const plantGrowth = [
  require('../../assets/images/plant1.png'),
  require('../../assets/images/plant2.png'),
  require('../../assets/images/plant3.png'),
  require('../../assets/images/plant4.png'),
  require('../../assets/images/plant5.png'),
  require('../../assets/images/plant6.png'),
];

const plantWilting = [
  require('../../assets/images/wilted1.png'),
  require('../../assets/images/wilted2.png'),
  require('../../assets/images/wilted3.png'),
  require('../../assets/images/wilted4.png'),
  require('../../assets/images/wilted5.png'),
  require('../../assets/images/wilted6.png'),
];

const deadPlant = require('../../assets/images/emptypot.png');




const HomeScreen = () => {
  const [points, setPoints] = useState(100);
  const [health, setHealth] = useState(60); 
  const [reduced, setReduced] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth(prev => {
        if (prev > 0) {
          setReduced(true); 
          return Math.max(prev - 5, 0); 
        }
        return prev;
      });
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getPlantImage = () => {
    if (health === 0) return deadPlant;
    
    if (reduced) { 
      if (health <= 10) return plantWilting[1];
      if (health <= 20) return plantWilting[2];
      if (health <= 50) return plantWilting[3];
      if (health <= 80) return plantWilting[4];
      if (health <= 120) return plantWilting[5];
      return plantWilting[0];
    } else { 
      if (health <= 70) return plantGrowth[0];
      if (health <= 80) return plantGrowth[1];
      if (health <= 90) return plantGrowth[2];
      if (health <= 100) return plantGrowth[3];
      if (health <= 110) return plantGrowth[4];
      return plantGrowth[5]; 
    }
  };

  const improvePlant = (cost: number, increase: number) => {
    if (points >= cost) {
      setPoints(prev => prev - cost);
      setHealth(prev => Math.min(prev + increase, 120)); 
      setReduced(false); 
    }
  };


  return (
    
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🌱 GreenerMiles</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsLabel}>Points Earned</Text>
          <View style={styles.pointsBox}>
            <Text style={styles.pointsText}>🌱 {points}</Text>
          </View>
        </View>
      </View>
      
      {/* Plant Section */}
      <View style={styles.plantContainer}>
        <View >
          <Image source={getPlantImage()} style={plant_size.itemIcon} />
        </View>
      </View>
      
      {/* Shop Section */}
      <View style={styles.shopContainer}>
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>Buy an item below to grow the plant</Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity onPress={() => improvePlant(15, 10)} style={styles.item}>
          <View style={styles.waterContainer}>
            <Image source={waterIcon} style={icon_size.itemIcon} />
          </View>
          {/* <Text style={{ color: '#658576', fontSize: 22 }}>15</Text> */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>15</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => improvePlant(25, 10)} style={styles.item}>
          <View style={styles.waterContainer}>
            <Image source={sunIcon} style={icon_size.itemIcon} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>25</Text>
          </View>        
        </TouchableOpacity>

        <TouchableOpacity onPress={() => improvePlant(35, 10)} style={styles.item}>
          <View style={styles.waterContainer}>
            <Image source={fertilizerIcon} style={icon_size.itemIcon} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>35</Text>
          </View>        
        </TouchableOpacity>
      </View>

      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.navbar}>
      </View>
    </ThemedView>
  );
}

const icon_size = StyleSheet.create({
  itemIcon: {
    width: 60,  
    height: 60, 
    resizeMode: 'contain', 
  },
});

const plant_size = StyleSheet.create({
  itemIcon: {
    alignItems: 'center',   
    width: 200,
    height: 200, 
    marginTop: 30,
    marginLeft: 30,    
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6FAE6',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C9A2A',
  },
  pointsContainer: {
    alignItems: 'center',
  },
  pointsLabel: {
    fontSize: 14,
    color: '#4C9A2A',
  },
  pointsBox: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  pointsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  plantContainer: {
    height: 270,
    backgroundColor: '#A8DFC9',
    borderRadius: 20,
    marginVertical: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 

    elevation: 5, 

  },
  shopContainer: {
    backgroundColor: '#8FB0C4',
    padding: 25,
    borderRadius: 15,
    height: 180,
    alignItems: 'center',
    bottom: 4.5,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 

    elevation: 5,
  },

  waterContainer: {
    width: 70, 
    height: 70, 
    borderRadius: 40,
    backgroundColor: '#DAFCEE', 
    justifyContent: 'center',
    alignItems: 'center',
    top: 6,
    
    
  },
  shopTitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  itemsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  item: {
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 24,
  },
  itemPrice: {
    fontSize: 14,
    marginTop: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E6FAE6',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15,
  },
  navIcon: {
    fontSize: 24,
  },  
  
  priceContainer: {
    backgroundColor: '#E6FAE6',  
    paddingHorizontal: 20,       
    paddingVertical: 1,          
    borderRadius: 20,           
    alignItems: 'center',       
    justifyContent: 'center',   
    marginTop: 15,
  },
  priceText: {
    color: '#658576',          
    fontSize: 22,              
    fontWeight: 'bold',          
  },

  bannerContainer: {
    backgroundColor: '#E6FAE6', 
    paddingVertical: 8,        
    paddingHorizontal: 12,     
    borderRadius: 30,           
    alignItems: 'center',        
    justifyContent: 'center',   
    width: '110%',               
    alignSelf: 'center',       
    bottom: 9,
  },
  bannerText: {
    color: '#658576',            
    fontSize: 10,               
    fontWeight: 'bold',         
  },
});

export default HomeScreen;
