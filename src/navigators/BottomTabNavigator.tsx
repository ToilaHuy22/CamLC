import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, SearchScreen } from '@/screens';
import { useTheme } from '@/hooks';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { Colors, Icons, Layout } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  Layout.fullSize,
                  Layout.center,
                  {
                    borderTopWidth: 2,
                    borderTopColor: focused
                      ? Colors.mainColor
                      : Colors.circleButtonBackground,
                  },
                ]}
              >
                <Image
                  source={Icons.HomeIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? Colors.mainColor : undefined,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  Layout.fullSize,
                  Layout.center,
                  {
                    borderTopWidth: 2,
                    borderTopColor: focused
                      ? Colors.mainColor
                      : Colors.circleButtonBackground,
                  },
                ]}
              >
                <Image
                  source={Icons.SearchIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? Colors.mainColor : undefined,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  Layout.fullSize,
                  Layout.center,
                  {
                    borderTopWidth: 2,
                    borderTopColor: focused
                      ? Colors.mainColor
                      : Colors.circleButtonBackground,
                  },
                ]}
              >
                <Image
                  source={Icons.UserIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? Colors.mainColor : undefined,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
