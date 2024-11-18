import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Device from "./screens/Device";
import Settings from "./screens/Settings";
import Home from "./screens/Home";
import Maps from "./screens/Maps";
import AddDevice from "./screens/AddDevice";

const StackNav = createStackNavigator();

function Stack(props) {
    return (
        <StackNav.Navigator screenOptions={{headerShown: false}}>
            <StackNav.Screen name="Home" component={Home} />
            <StackNav.Screen name="Device" component={Device} />
            <StackNav.Screen name="Settings" component={Settings} />
            <StackNav.Screen name="Maps" component={Maps} />
            <StackNav.Screen name="AddDevice" component={AddDevice} />
        </StackNav.Navigator>
    );
}

export default Stack;