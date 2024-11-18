import { Avatar, Button, Text, Card as PaperCard, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function AddButton(props) {
    const navigation = useNavigation();

    const renderAddDeviceCard = () => (
        <Pressable onPress={() => navigation.navigate('AddDevice')}>
            <PaperCard style={[styles.card, styles.pressable, styles.addDeviceCard]}>
                <PaperCard.Content>
                    <View style={styles.addDeviceContainer}>
                        <IconButton
                            icon="plus"
                            size={40}
                            iconColor="#000"
                        />
                        <Text style={styles.addDeviceText}>Add New Device</Text>
                    </View>
                </PaperCard.Content>
            </PaperCard>
        </Pressable>
    );

    return renderAddDeviceCard();
}

const styles = StyleSheet.create({
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
    pressable: {
        opacity: 1,
    },
    addDeviceCard: {
        backgroundColor: '#fff',
    },
    addDeviceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    addDeviceText: {
        fontSize: 16,
        color: '#000',
        marginTop: 8,
    }
});