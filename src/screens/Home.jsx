import React, { useState } from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";

export default function Home() {
    const [data, setData] = useState([])
    
    return <View>
        <Text>Welcome to BatteryWorld</Text>
        <TextInput 
            style={styles.searchBar}
            placeholder="Search Devices"
            keyboardType="default" />

        <FlatList data={data}
            renderItem={(item) => console.log(item)}
            keyExtractor={(item) => item.id}/>
    </View>
}

const styles = {
    searchBar: {
        borderRadius: 10,
        alignSelf: "center",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
}