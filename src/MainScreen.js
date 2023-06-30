import React from 'react';
import { View, Text } from 'react-native';
import ProfileMenu from './profile-menu/ProfileMenu';

const MainScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Title bar */}
      <View
        style={{
          height: 50,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Title Bar</Text>
      </View>

      {/* Main content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#5A5A5A" }}>
        <Text>Main Screen Content</Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <ProfileMenu/>
      </View>
    </View>
  );
};

export default MainScreen;
