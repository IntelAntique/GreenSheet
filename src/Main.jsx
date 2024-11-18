import { Text, View, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack from "./Stack"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BatteryContext from './supports/BatteryContext'

export default function Main() {

    const [data, setData] = useState([])  

    return (
        <>
            <SafeAreaProvider>
                <BatteryContext.Provider value={{ data, setData }}>
                    <NavigationContainer>
                        <Stack />
                    </NavigationContainer>
                </BatteryContext.Provider>
            </SafeAreaProvider>
        </>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 10,
        alignSelf: "center",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
  });