import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfileMenu = () => {
  const images = [
    require('../../assets/adhish.png'),
    require('../../assets/adhish.png'),
    require('../../assets/adhish.png'),
    require('../../assets/adhish.png'),
    require('../../assets/adhish.png'),
  ];

  const shuffleArray = (array) => {
    // Shuffles the array using Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledImages = shuffleArray(images);

  return (
    <View style={styles.container}>
      {/* Circle images */}
      <View style={styles.imageContainer}>
        {shuffledImages.map((image, index) => (
          <View key={index} style={styles.circle}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor: 'rgba(128, 128, 128, 0.5)', 
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    margin: 10,
    overflow: 'hidden',
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ProfileMenu;
