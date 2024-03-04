import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "../screens/Movies";
import SearchResults from "../screens/SearchResults";
import TVShows from "../screens/TVShows";

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#8878C8",
          inactiveTintColor: "gray",
          labelStyle: { fontSize: 14, fontWeight: "bold" },
          indicatorStyle: { backgroundColor: "#8878C8" },
        }}
      >
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Search Results" component={SearchResults} />
        <Tab.Screen name="TV Shows" component={TVShows} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopNavigation;
