import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens";
import { Login } from "../screens/Auth/Login";
import { Register } from "../screens/Auth/Register";
import Search from "../screens/Search";
import Favourite from "../screens/Favourite";
import Logout from "../screens/Auth/Logout";
import MainHome from "../screens/mainhome";
import Categories from "../screens/categories";
import RecipeItem from "../screens/recipeItem";
import Footer from "../components/Footer";

const Stack = createNativeStackNavigator();

const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="icon"
          component={Home}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="mainhome"
          component={MainHome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="category"
          component={Categories}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="recipeItem"
          component={RecipeItem}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="search"
          component={Search}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="favourite"
          component={Favourite}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="footer"
          component={Footer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="logout"
          component={Logout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
