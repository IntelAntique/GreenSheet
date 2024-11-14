import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Animated, PanResponder } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useBatteryLevel, addBatteryLevelListener, getBatteryLevelAsync } from 'expo-battery';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Maps({ route }) {
    const [batteryLevel, setBatteryLevel] = useState(0);
    const [location, setLocation] = useState({ coords: { latitude: 0, longitude: 0 } });
    const pan = useState(new Animated.ValueXY())[0];

    // Get params from navigation
    const { latitude, longitude, name, deviceName, batteryPercentage } = route.params;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            pan.setValue({
                x: gestureState.dx,
                y: gestureState.dy
            });
        },
        onPanResponderRelease: () => {
            pan.extractOffset();
        }
    });

    useEffect(() => {
        const subscription = addBatteryLevelListener(({ batteryLevel }) => {
            setBatteryLevel(batteryLevel);
        });

        getBatteryLevelAsync().then(setBatteryLevel);

        (async () => {
            let { status } = await requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await getCurrentPositionAsync({});
            setLocation(location);
        })();

        return () => subscription.remove();
    }, []);

    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: latitude || location.coords.latitude,
                    longitude: longitude || location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: latitude || location.coords.latitude,
                        longitude: longitude || location.coords.longitude,
                    }}
                    title={name}
                    description={deviceName}
                />
            </MapView>
            
            <Animated.View
                style={[styles.batteryIndicator, {
                    transform: [
                        { translateX: pan.x },
                        { translateY: pan.y }
                    ]
                }]}
                {...panResponder.panHandlers}
            >
                <Text style={styles.batteryText}>
                    {batteryPercentage || Math.round(batteryLevel * 100)}%
                </Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    batteryIndicator: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    batteryText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default Maps;