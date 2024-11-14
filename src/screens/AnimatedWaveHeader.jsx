import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Path } from 'react-native-svg';

export default function AnimatedWaveHeader() {
    const animatedValue1 = useRef(new Animated.Value(0)).current;
    const animatedValue2 = useRef(new Animated.Value(0)).current;
    const { width } = Dimensions.get('window');

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(animatedValue1, {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue2, {
                    toValue: 1,
                    duration: 6000,
                    useNativeDriver: true,
                })
            ])
        ).start();
    }, []);

    const AnimatedPath = Animated.createAnimatedComponent(Path);
    
    const translateX1 = animatedValue1.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, 0]
    });

    const translateX2 = animatedValue2.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, 0]
    });

    return (
        <MaskedView
            style={{ height: 60, backgroundColor: 'transparent' }}
            maskElement={
                <Text style={[styles.header, { backgroundColor: 'transparent' }]}>
                    Device Tracker
                </Text>
            }
        >
            <Animated.View style={{ transform: [{ translateX: translateX1 }] }}>
                <LinearGradient
                    colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ height: 60, width: width * 2 }}
                >
                    <Svg height="60" width={width * 2}>
                        <AnimatedPath
                            d={`M0 20 Q${width/4} 40 ${width/2} 20 T${width} 20 T${width*1.5} 20 T${width*2} 20`}
                            fill="none"
                            stroke="rgba(255,255,255,0.7)"
                            strokeWidth="3"
                        />
                        <AnimatedPath
                            d={`M0 30 Q${width/4} 10 ${width/2} 30 T${width} 30 T${width*1.5} 30 T${width*2} 30`}
                            fill="none"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="2"
                        />
                    </Svg>
                </LinearGradient>
            </Animated.View>
        </MaskedView>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    }
});