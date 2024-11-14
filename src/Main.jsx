import { Text, View, /* @tutinfo Import <CODE>StyleSheet</CODE> to define styles. */ StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from "./Navigation"

export default function Main() {

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      
    },
    text: {
      
    },
    searchBar: {
        borderRadius: 10,
        alignSelf: "center",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
  });