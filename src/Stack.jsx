import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Device from "../screens/Device";
import Settings from "../screens/Settings";
import Home from "../screens/Home";

const Stack = createStackNavigator();

function Stack(props) {
    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Device" component={Device} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

export default Stack;