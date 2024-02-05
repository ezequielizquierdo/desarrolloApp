import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";

export const CartComponent = () => {
    return (
        <View style={styles.cartContainer}>
            <Text>Carrito</Text>
            <Image
                style={styles.cartImage}
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cartContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        alignItems: "center",
    },
    cartImage: {
        width: 50, height: 50
    }
});
