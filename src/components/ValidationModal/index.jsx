import React from 'react'
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';


export const ValidationModal = ({title, visible, onRemove, onClose}) => {
    return (
        <Modal animationType="slide" visible={visible} transparent>
            <View style={styles.modalContainer}>
                <Text>{title}</Text>
                <Pressable onPress={onRemove}>
                    <Text>Si</Text>
                </Pressable>
                <Pressable onPress={onClose}>
                    <Text>No</Text>
                </Pressable>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        height: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
