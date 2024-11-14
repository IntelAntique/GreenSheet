import React, { useState } from "react";
import { View, TextInput, FlatList, Image, StyleSheet, Pressable, Animated, Dimension } from "react-native";
import { Avatar, Button, Text, Card as PaperCard } from "react-native-paper";
import Card from "../supports/MyCard";
import AddDevice from "./AddDevice";
import { useNavigation } from "@react-navigation/native";
import AnimatedWaveHeader from "./AnimatedWaveHeader";
import AddButton from "./AddButton";

export default function Home() {
    const navigation = useNavigation();
    const data = [
        {
            id: 1,
            name: "Robert Downey Jr",
            location: {
                latitude: 40.7128,
                longitude: -74.0060
            },
            batteryPercentage: 75,
            deviceName: "iPhone 13 Pro"
        },
        {
            id: 2,
            name: "Harvey Specter",
            location: {
                latitude: 34.0522,
                longitude: -118.2437
            },
            batteryPercentage: 50,
            deviceName: "Samsung Galaxy S22"
        },
        {
            id: 3,
            name: "Sarah",
            location: {
                latitude: 41.8781,
                longitude: -87.6298
            },
            batteryPercentage: 90,
            deviceName: "Google Pixel 6"
        },
        {
            id: 4,
            name: "Young Sheldon",
            location: {
                latitude: 29.7604,
                longitude: -95.3698
            },
            batteryPercentage: 65,
            deviceName: "OnePlus 9"
        }
    ];

    const renderItem = ({ item }) => (
        <Pressable 
            onPress={() => navigation.navigate('Maps', {
                latitude: item.location.latitude,
                longitude: item.location.longitude,
                name: item.name,
                deviceName: item.deviceName,
                batteryPercentage: item.batteryPercentage
            })}
        >
            <PaperCard style={[styles.card, styles.pressable]}>
                <PaperCard.Content>
                    <View style={styles.cardHeader}>
                        <Avatar.Icon size={40} icon="phone" style={styles.avatar} />
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.deviceName}>{item.deviceName}</Text>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.batteryText}>
                            Battery: {item.batteryPercentage}%
                        </Text>
                        <Text style={styles.locationText}>
                            Location: {item.location.latitude.toFixed(4)}, {item.location.longitude.toFixed(4)}
                        </Text>
                    </View>
                </PaperCard.Content>
            </PaperCard>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <AnimatedWaveHeader />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                ListFooterComponent={AddButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#000',
    },
    listContainer: {
        gap: 16,
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 12,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { 
            width: -2,
            height: 4 
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        android_ripple: {
            color: 'rgba(0, 0, 0, 0.1)',
        },
        margin: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: '#000',
        marginRight: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    deviceName: {
        fontSize: 14,
        color: '#666',
    },
    cardBody: {
        marginTop: 8,
    },
    batteryText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    locationText: {
        fontSize: 14,
        color: '#666',
    },
    pressable: {
        opacity: 1,
    },
});