import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function AddDevice() {
    return (
        <View style={styles.container}>
            <Text>Add Device, Maybe make a modal?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});