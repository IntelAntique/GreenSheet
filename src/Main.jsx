import { Text, View, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack from "./Stack"

export default function Main() {

    return (
        <>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
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