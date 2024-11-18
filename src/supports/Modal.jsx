import React, { useContext } from 'react';
import { Modal, Pressable, View, Text, ToastAndroid, StyleSheet } from 'react-native';
import BatteryContext from './BatteryContext';

export default function ContextModal({ visible, onClose, selectedItem }) {
    const { data, setData } = useContext(BatteryContext);

    const removeItem = () => {
        const newData = data.filter(item => item.id !== selectedItem.id);
        setData(newData);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <Pressable 
                style={styles.modalOverlay} 
                onPress={onClose}
            >
                <View style={styles.contextMenu}>
                    <Pressable 
                        style={styles.contextButton}
                        onPress={() => {
                            ToastAndroid.show('Notification sent: Where & how are you', ToastAndroid.SHORT);
                            onClose();
                        }}
                    >
                        <Text style={styles.contextButtonText}>Send Alert</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.contextButton}
                        onPress={() => {
                            ToastAndroid.show('Notification sent: Check battery bro', ToastAndroid.SHORT);
                            onClose();
                        }}
                    >
                        <Text style={styles.contextButtonText}>Send Warning</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.contextButton}
                        onPress={() => {
                            ToastAndroid.show('Removing Item', ToastAndroid.SHORT);
                            removeItem()
                            onClose();
                        }}
                    >
                        <Text style={styles.contextButtonText}>Remove Device</Text>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contextMenu: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        minWidth: 200,
        elevation: 5,
    },
    contextButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    contextButtonText: {
        fontSize: 16,
        color: '#000',
    }
});