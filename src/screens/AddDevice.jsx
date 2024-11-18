import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Switch, Button, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BatteryContext } from "../supports/BatteryContext";


export default function AddDevice(props) {
    const { data, setData } = useContext(BatteryContext);
    const [deviceName, setDeviceName] = useState("");
    const [userName, setUserName] = useState("");
    const [isCurrentDevice, setIsCurrentDevice] = useState(false);
    const insets = useSafeAreaInsets();

    const add = () => {
        console.log("hello")
        // setData((prevData) => console.log(prevData));
        if (!deviceName || !userName) {
            Alert.alert("Please fill all fields", "Both fields are required");
            return;
        }

        const newData = {
            id: Object.keys(data).length + 1,
            name: userName,
            location: {
                latitude: 0,
                longitude: 0
            },
            batteryPercentage: Math.floor(Math.random() * 100),
            deviceName: deviceName,
        };

        setData((prevData) => [...prevData, newData]);
        props.navigation.goBack();
    }

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            {/* <Text>Add Device, Maybe make a modal?</Text> */}
            <Text style={styles.note}>Make sure this app is installed in your other device!</Text>
            <View style={styles.formGroup}>
                <TextInput 
                    style={styles.input}
                    value={deviceName}
                    onChangeText={setDeviceName}
                    placeholder="Enter device name"
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput 
                    style={styles.input}
                    value={userName}
                    onChangeText={setUserName}
                    placeholder="Enter user name"
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Is this your current device?</Text>
                <Switch
                    value={isCurrentDevice}
                    onValueChange={setIsCurrentDevice}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isCurrentDevice ? "#1976D2" : "#f4f3f4"}
                />
            </View>
            <Button title="add" onPress={add}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    note: {
        fontSize: 14,
        color: '#F00',
        marginBottom: 20,
    }
});