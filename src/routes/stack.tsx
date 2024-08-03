import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import { PropsStackRoutes } from "./interfaces";

const StackNavigator = createNativeStackNavigator<PropsStackRoutes>();

export default function StackNavigationApp() {
    return (
        <StackNavigator.Navigator screenOptions={{headerShown: false}}>
            <StackNavigator.Screen name="Login" component={Login} />
            <StackNavigator.Screen name="Home" component={Home} />
            <StackNavigator.Screen name="Register" component={Register} />
        </StackNavigator.Navigator>
    )
}